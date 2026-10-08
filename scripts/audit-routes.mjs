/**
 * Audit internal navigation: path URLs only, no hash routing in source.
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const repoRoot = process.cwd();
const routingUrl = pathToFileURL(join(repoRoot, 'src/routing.ts')).href;
const { ROUTE_PATH, VALID_PAGE_ROUTES } = await import(routingUrl);

const allowHashFiles = new Set([
  'src/routing.ts',
  'src/components/LegacyHashRedirect.tsx',
  'vite.spaHashBootstrap.ts',
]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === 'node_modules' || name === 'dist') continue;
      walk(full, out);
    } else if (/\.(tsx?|jsx?)$/.test(name)) {
      out.push(full);
    }
  }
  return out;
}

const srcFiles = walk(join(repoRoot, 'src'));
const appTsx = readFileSync(join(repoRoot, 'src/App.tsx'), 'utf8');

const missingInApp = [];
for (const route of VALID_PAGE_ROUTES) {
  const path = ROUTE_PATH[route];
  if (path === '/') continue;
  const quoted = `path="${path}"`;
  const quotedAlt = `path='${path}'`;
  if (!appTsx.includes(quoted) && !appTsx.includes(quotedAlt)) {
    missingInApp.push(path);
  }
}

if (missingInApp.length) {
  console.error('App.tsx is missing Route definitions for:', missingInApp.join(', '));
  process.exit(1);
}

const forbidden = [
  { re: /location\.hash\s*=/, label: 'location.hash assignment' },
  { re: /href=["']#\/?\w/, label: 'hash href' },
  { re: /to=["']#\/?\w/, label: 'hash router link' },
  { re: /["']\/#\w/, label: 'string /#route' },
];

const violations = [];
for (const file of srcFiles) {
  const rel = relative(repoRoot, file).replace(/\\/g, '/');
  if (allowHashFiles.has(rel)) continue;
  const text = readFileSync(file, 'utf8');
  for (const { re, label } of forbidden) {
    if (re.test(text)) {
      violations.push(`${rel}: ${label}`);
    }
  }
}

if (violations.length) {
  console.error('Hash routing patterns found in source:\n' + violations.join('\n'));
  process.exit(1);
}

console.log('Route audit OK (' + VALID_PAGE_ROUTES.length + ' routes, path-only navigation).');
for (const route of VALID_PAGE_ROUTES) {
  console.log('  ', ROUTE_PATH[route], '←', route);
}
