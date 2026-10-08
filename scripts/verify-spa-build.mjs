/**
 * Fail CI / deploy if production build still uses hash routing or omits the bootstrap script.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const distDir = 'dist';
const indexPath = join(distDir, 'index.html');
const indexHtml = readFileSync(indexPath, 'utf8');

if (!indexHtml.includes('history.replaceState')) {
  console.error('dist/index.html is missing the hash → path bootstrap script.');
  process.exit(1);
}

const jsMatch = indexHtml.match(/\/assets\/index-[^"']+\.js/);
if (!jsMatch) {
  console.error('Could not find main JS bundle in dist/index.html.');
  process.exit(1);
}

const jsPath = join(distDir, jsMatch[0].slice(1));
const jsBundle = readFileSync(jsPath, 'utf8');

if (/location\.hash\s*=/.test(jsBundle)) {
  console.error('Main bundle still assigns location.hash (old router). Rebuild from current src/.');
  process.exit(1);
}

if (!/react-router|BrowserRouter|createBrowserRouter/.test(jsBundle)) {
  console.error('Main bundle does not include React Router (path-based URLs will not work).');
  process.exit(1);
}

console.log('SPA build OK:', jsMatch[0]);
