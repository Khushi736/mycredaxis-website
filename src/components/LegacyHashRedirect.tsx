/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPathForRoute, isValidPageRoute } from '../routing';

/** One-time migration: `/#privacy-policy` → `/privacy-policy` (no hash in address bar). */
export function LegacyHashRedirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const raw = location.hash.replace(/^#\/?/, '').trim();
    if (!raw) {
      return;
    }

    if (isValidPageRoute(raw)) {
      navigate(getPathForRoute(raw), { replace: true });
      return;
    }

    navigate({ pathname: location.pathname, search: location.search }, { replace: true });
  }, [location.hash, location.pathname, location.search, navigate]);

  return null;
}
