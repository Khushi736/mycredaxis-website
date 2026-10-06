/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from 'react';

/** Column labels for stacked mobile compare rows (::before content). */
export function centricCompareWrapStyle(leftHeader: string, rightHeader: string): CSSProperties {
  const quote = (value: string) => `"${value.replace(/"/g, '\\"')}"`;
  return {
    '--centric-compare-left-label': quote(leftHeader),
    '--centric-compare-right-label': quote(rightHeader),
  } as CSSProperties;
}
