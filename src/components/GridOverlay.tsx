/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const GridOverlay: React.FC<{ active: boolean }> = ({ active }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-12 gap-6 h-full opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="h-full bg-[#4F6BFF] border-x border-[#4F6BFF]/40 flex items-start justify-center pt-24"
          >
            <span className="text-[10px] font-mono font-bold text-[#4F6BFF] bg-white/80 px-1 rounded-xs">
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
