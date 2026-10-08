/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPathForRoute } from '../routing';
import type { PageRoute } from '../types';

export function useAppNavigate() {
  const navigate = useNavigate();

  return useCallback(
    (route: PageRoute) => {
      navigate(getPathForRoute(route));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [navigate],
  );
}
