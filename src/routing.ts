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
  if (trimmed === '' || trimmed === '/index.html') {
    return '/';
  }
  return trimmed;
}

/** Map URL pathname to app route (hash ignored — use LegacyHashRedirect for old links). */
export function getRouteFromPathname(pathname: string): PageRoute {
  const normalized = normalizePathname(pathname);
  return PATH_TO_ROUTE[normalized] ?? 'home';
}

/** @deprecated Prefer getRouteFromPathname + LegacyHashRedirect */
export function getRouteFromLocation(loc: Pick<Location, 'pathname' | 'hash'> = window.location): PageRoute {
  const fromPath = getRouteFromPathname(loc.pathname);
  if (fromPath !== 'home' || normalizePathname(loc.pathname) !== '/') {
    return fromPath;
  }

  const hash = loc.hash.replace(/^#\/?/, '').trim();
  if (hash && VALID_PAGE_ROUTES.includes(hash as PageRoute)) {
    return hash as PageRoute;
  }

  return 'home';
}

export function getPathForRoute(route: PageRoute): string {
  return ROUTE_PATH[route] ?? '/';
}

export function isValidPageRoute(value: string): value is PageRoute {
  return VALID_PAGE_ROUTES.includes(value as PageRoute);
}
