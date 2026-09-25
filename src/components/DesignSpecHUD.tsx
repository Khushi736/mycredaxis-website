/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Palette,
  Type,
  Layers,
  Sparkles,
  Grid,
  Check,
  Copy,
  ExternalLink,
  Sliders,
  ChevronDown,
  ChevronUp,
  X,
  Compass
} from 'lucide-react';

interface DesignSpecHUDProps {
  showGrid: boolean;
  setShowGrid: (val: boolean) => void;
  activeSection?: string;
  onJumpToSection?: (id: string) => void;
}

export const DesignSpecHUD: React.FC<DesignSpecHUDProps> = ({
  showGrid,
  setShowGrid,
  onJumpToSection,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'palette' | 'archetypes' | 'typography'>('palette');

  const brandColors = [
    {
      name: 'Black',
      hex: '#0A0A0B',
      role: 'Primary Surface / Dark Section / Prestige Accents',
      lightText: true,
      border: false,
    },
    {
      name: 'Electric Blue',
      hex: '#4F6BFF',
      role: 'Hero CTAs / Dynamic Gauges / Interactive Focal Points',
      lightText: true,
      border: false,
    },
    {
      name: 'Subtle Teal',
      hex: '#20C7B5',
      role: 'Credit Health Arc / Success States / Growth Indicators',
      lightText: true,
      border: false,
    },
    {
      name: 'Soft Grey',
      hex: '#F7F8FA',
      role: 'Main Desktop Canvas / Card Insets / Low-Glare Surface',
      lightText: false,
      border: true,
    },
    {
      name: 'Pure White',
      hex: '#FFFFFF',
      role: 'Card Canvases / Contrast Elevation / Crisp UI Layers',
      lightText: false,
      border: true,
    },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <>


      {/* Expanded Spec Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-16 px-4 pb-8 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="px-6 py-4 bg-[#0A0A0B] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#20C7B5]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm leading-tight text-white">
                    MyCredAxis Visual Moodboard & Design Constitution
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    CRED Prestige + Jupiter Modern Finance + PhonePe Breadth
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Spec Subnav Tabs */}
            <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-50 border-b border-slate-200 text-xs">
              <button
                onClick={() => setActiveTab('palette')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'palette'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Palette className="w-3.5 h-3.5 text-[#4F6BFF]" />
                <span>Color Palette (5 Tokens)</span>
              </button>

              <button
                onClick={() => setActiveTab('archetypes')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'archetypes'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#20C7B5]" />
                <span>Fintech Archetype Synergy</span>
              </button>

              <button
                onClick={() => setActiveTab('typography')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'typography'
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <Type className="w-3.5 h-3.5 text-slate-700" />
                <span>Typography & Math</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {/* Tab 1: Palette */}
              {activeTab === 'palette' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The MyCredAxis palette anchors on dark authority (<code className="text-[#0A0A0B] font-bold">#0A0A0B</code>), clean white space, warm soft grey base (<code className="text-slate-700 font-bold">#F7F8FA</code>), accelerated by high-chroma Electric Blue (<code className="text-[#4F6BFF] font-bold">#4F6BFF</code>) and health-signaling Subtle Teal (<code className="text-[#20C7B5] font-bold">#20C7B5</code>).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                    {brandColors.map((color) => (
                      <div
                        key={color.hex}
                        className="rounded-2xl p-3 border border-slate-200/80 flex flex-col justify-between bg-white shadow-xs group"
                      >
                        <div
                          className={`w-full h-16 rounded-xl flex items-end justify-between p-2 mb-2 transition-transform group-hover:scale-[1.02] ${color.border ? 'border border-slate-200' : ''
                            }`}
                          style={{ backgroundColor: color.hex }}
                        >
                          <span
                            className={`text-[10px] font-mono font-bold ${color.lightText ? 'text-white/90' : 'text-slate-800'
                              }`}
                          >
                            {color.hex}
                          </span>
                          <button
                            onClick={() => handleCopy(color.hex)}
                            className={`p-1 rounded-md transition-all ${color.lightText
                                ? 'bg-white/20 hover:bg-white/30 text-white'
                                : 'bg-black/10 hover:bg-black/20 text-slate-800'
                              }`}
                            title="Copy Hex"
                          >
                            {copiedHex === color.hex ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs text-slate-900">
                            {color.name}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 leading-snug">
                            {color.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Looking to see the <strong>Dark Section</strong> in context?
                    </span>
                    {onJumpToSection && (
                      <button
                        onClick={() => {
                          onJumpToSection('dark-section');
                          setIsOpen(false);
                        }}
                        className="font-semibold text-[#4F6BFF] hover:underline flex items-center gap-1"
                      >
                        <span>Jump to CRED-inspired Dark Section</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Tab 2: Archetypes */}
              {activeTab === 'archetypes' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                    {/* CRED */}
                    <div className="rounded-2xl p-4 bg-[#0A0A0B] text-white border border-slate-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          Aesthetic 01
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-medium">
                          CRED-Inspired
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-white">Prestige & Exclusivity</h4>
                      <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                        Refined typography, high contrast dark canvas, subtle metallic glass, and member privilege framing.
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
                        <span>Used in:</span>
                        <span className="text-[#20C7B5] font-semibold">One Dark Section & Titanium Vault</span>
                      </div>
                    </div>

                    {/* Jupiter */}
                    <div className="rounded-2xl p-4 bg-[#F7F8FA] text-slate-900 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          Aesthetic 02
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4F6BFF]/10 text-[#4F6BFF] font-medium">
                          Jupiter-Inspired
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Modern Digital Clarity</h4>
                      <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        App-first visual hierarchy, tactile cards, interactive credit gauge, and playful yet disciplined micro-surfaces.
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
                        <span>Used in:</span>
                        <span className="text-[#4F6BFF] font-semibold">Hero Mockup & Live Cards</span>
                      </div>
                    </div>

                    {/* PhonePe */}
                    <div className="rounded-2xl p-4 bg-white text-slate-900 border border-slate-200 shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                          Aesthetic 03
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                          PhonePe-Inspired
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Financial Ecosystem</h4>
                      <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                        Comprehensive utility integration, instant AutoPay mandates, bank-grade trust assurance, and high utility breadth.
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
                        <span>Used in:</span>
                        <span className="text-emerald-600 font-semibold">Capability Grid & Security Section</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Typography */}
              {activeTab === 'typography' && (
                <div className="space-y-3.5">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                      <span className="font-display font-extrabold text-2xl text-slate-900">
                        Poppins Display 56px/64px
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Hero & Major Titles</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                      <span className="font-display font-bold text-lg text-slate-900">
                        Poppins Semibold 28px/36px
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Section Headings</span>
                    </div>

                    <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                      <span className="font-body font-medium text-sm text-slate-700">
                        Plus Jakarta Sans Medium 14px/16px
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Body & Feature Copy</span>
                    </div>

                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs text-slate-500">
                        780+ Member Score · 0% Late Fees · 256-Bit Encrypted
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">Metadata (Zero-Pill)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>MyCredAxis Visual Moodboard · Concept Reference</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-white border border-slate-300 rounded-lg text-slate-800 font-medium hover:bg-slate-50"
              >
                Close Spec
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
