/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import partnerDashboard from '../assets/images/partner-dashboard-mockup.jpg';

/** Partner hero — full app home dashboard (reference screenshot). */
export const PartnerDashboardMockupScreen: React.FC = () => {
  return (
    <div className="mockup-partner-dashboard flex-1 min-h-0 w-full bg-white overflow-hidden">
      <img
        src={partnerDashboard}
        alt=""
        className="w-full h-full object-cover object-top select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
};
