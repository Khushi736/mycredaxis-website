/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="page-shell fx-page font-sans">
    {children}
  </div>
);
