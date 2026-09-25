/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logo from "../assets/logos/app-logo.webp";

interface MyCredAxisLogoProps {
  variant?: 'dark' | 'light' | 'mono';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export const MyCredAxisEmblem: React.FC<{
  size?: number;
  className?: string;
}> = ({ size = 40, className = "" }) => {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      alt="MyCredAxis Emblem"
      className={`shrink-0 object-contain ${className}`}
    />
  );
};

export const MyCredAxisLogo: React.FC<MyCredAxisLogoProps> = ({
  variant = 'light',
  size = 'md',
  showSubtext = true,
  className = '',
  iconOnly = false,
}) => {
  const sizeMap = {
    sm: { icon: 30, text: 'text-base', subtext: 'text-[9px]', tracking: 'tracking-widest' },
    md: { icon: 38, text: 'text-xl', subtext: 'text-[10px]', tracking: 'tracking-[0.2em]' },
    lg: { icon: 46, text: 'text-2xl', subtext: 'text-[11px]', tracking: 'tracking-[0.24em]' },
    xl: { icon: 58, text: 'text-3xl', subtext: 'text-xs', tracking: 'tracking-[0.28em]' },
  };

  const currentSize = sizeMap[size];
  const isDarkTheme = variant === 'dark';

  if (iconOnly) {
    return <MyCredAxisEmblem size={currentSize.icon} className={className} />;
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <MyCredAxisEmblem size={currentSize.icon} />

      <div className="flex flex-col justify-center">
        <div className="flex items-center">
          <span
            className={`font-display font-bold leading-tight ${currentSize.text} ${
              isDarkTheme ? 'text-white' : 'text-[#0A0A0B]'
            }`}
          >
            MyCred<span className="text-[#4F6BFF]">Axis</span>
          </span>
        </div>

        {showSubtext && (
          <div className="flex items-center gap-1 mt-0.5">
            <span
              className={`h-[1px] w-2.5 ${
                isDarkTheme ? 'bg-white/30' : 'bg-[#0A0A0B]/30'
              }`}
            />
            <span
              className={`font-display font-medium uppercase leading-none ${currentSize.subtext} ${
                currentSize.tracking
              } ${isDarkTheme ? 'text-white/70' : 'text-[#0A0A0B]/60'}`}
            >
              BY BISANI BROTHER
            </span>
            <span
              className={`h-[1px] w-2.5 ${
                isDarkTheme ? 'bg-white/30' : 'bg-[#0A0A0B]/30'
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
