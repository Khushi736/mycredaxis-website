/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PageRoute } from './types';

export const VALID_PAGE_ROUTES: PageRoute[] = [
  'home',
  'individuals',
  'business',
  'partners',
  'security',
  'faq',
  'contact',
  'privacy-policy',
  'terms-conditions',
];

export const ROUTE_PATH: Record<PageRoute, string> = {
  home: '/',
  individuals: '/individuals',
  business: '/business',
  partners: '/partners',
  security: '/security',
  faq: '/faq',
  contact: '/contact',
  'privacy-policy': '/privacy-policy',
  'terms-conditions': '/terms-conditions',
};

const PATH_TO_ROUTE: Record<string, PageRoute> = Object.fromEntries(
  Object.entries(ROUTE_PATH).map(([route, path]) => [path, route as PageRoute]),
) as Record<string, PageRoute>;

function normalizePathname(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

/** Resolve route from pathname and legacy `/#route` hash URLs. */
export function getRouteFromLocation(loc: Pick<Location, 'pathname' | 'hash'> = window.location): PageRoute {
  const hash = loc.hash.replace(/^#\/?/, '').trim();
  if (hash && VALID_PAGE_ROUTES.includes(hash as PageRoute)) {
    return hash as PageRoute;
  }

  const pathname = normalizePathname(loc.pathname);
  const fromPath = PATH_TO_ROUTE[pathname];
  if (fromPath) {
    return fromPath;
  }

  return 'home';
}

export function getPathForRoute(route: PageRoute): string {
  return ROUTE_PATH[route] ?? '/';
}

export function isValidPageRoute(value: string): value is PageRoute {
  return VALID_PAGE_ROUTES.includes(value as PageRoute);
}

/** Update the address bar without hash fragments. */
export function writeRouteToHistory(route: PageRoute, mode: 'push' | 'replace' = 'push'): void {
  const path = getPathForRoute(route);
  const nextUrl = `${path}${window.location.search}`;
  const currentUrl = `${window.location.pathname}${window.location.search}`;

  if (currentUrl === nextUrl && !window.location.hash) {
    return;
  }

  if (mode === 'replace') {
    window.history.replaceState({ route }, '', nextUrl);
  } else {
    window.history.pushState({ route }, '', nextUrl);
  }
}

/** Strip legacy hash URLs after resolving the route (e.g. /#privacy-policy → /privacy-policy). */
export function migrateLegacyHashUrl(route: PageRoute): void {
  if (!window.location.hash) {
    return;
  }
  writeRouteToHistory(route, 'replace');
}
