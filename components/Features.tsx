import React, { useState } from 'react';
import { Heart, Leaf, Cpu, Activity, CheckCircle2, ShieldCheck, Layers, ArrowDown, TrendingDown, Recycle, Search } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-8 h-8" />,
    color: "text-hnt-orange",
    borderColor: "group-hover:border-hnt-orange/50",
    gradient: "from-hnt-orange/20 to-transparent",
    title: "HUMAN",
    sub: "사람을 위한 건설",
    description: "안전을 최우선 가치로 여기며, 사람이 중심이 되는 건설 환경을 조성합니다."
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    color: "text-hnt-green",
    borderColor: "group-hover:border-hnt-green/50",
    gradient: "from-hnt-green/20 to-transparent",
    title: "NATURE",
    sub: "자연과의 공존",
    description: "환경 영향을 최소화하는 친환경 공법을 통해 자연과 더불어 살아가는 미래를 만듭니다."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    color: "text-hnt-blue",
    borderColor: "group-hover:border-hnt-blue/50",
    gradient: "from-hnt-blue/20 to-transparent",
    title: "TECHNOLOGY",
    sub: "혁신적인 기술력",
    description: "독보적인 연약지반대체공법과 최첨단 엔지니어링 솔루션을 제공합니다."
  }
];

const Features: React.FC = () => {
  // Interaction State
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Active Index Logic: Clicked (Fixed) takes precedence over Hover
  const activeIndex = selectedIndex !== null ? selectedIndex : hoverIndex;

  const techItems = [
    { title: "지반 침하 방지 및 지지력 확보", icon: Layers, color: "text-hnt-blue" },
    { title: "공기 단축 및 경제성 확보", icon: Activity, color: "text-purple-400" },
    { title: "친환경 자재 활용", icon: Leaf, color: "text-hnt-green" },
    { title: "정밀 시공 및 품질 관리", icon: ShieldCheck, color: "text-hnt-orange" }
  ];

  return (
    <section id="technology" className="relative py-16 md:py-32 px-4 md:px-6 z-10 bg-black/40 backdrop-blur-sm overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-hnt-navy/50 via-black/50 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-2 md:mb-4 animate-[fadeIn_0.5s_ease-out]">
            <Activity className="w-4 h-4 text-hnt-blue" />
            <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Our Core Values</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight leading-tight">
            The Foundation of <span className="text-hnt-blue">Excellence</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            H.N.T가 추구하는 세 가지 핵심 가치는 더 나은 세상을 위한 약속입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-6 md:p-10 glass-card rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 ${feature.borderColor}`}
            >
              {/* Internal Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col items-start space-y-4 md:space-y-6">
                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 ${feature.color} group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-xl md:text-2xl font-montserrat font-bold text-white tracking-wider">
                    {feature.title}
                  </h3>
                  <p className={`text-xs md:text-sm font-bold ${feature.color} uppercase tracking-widest opacity-80`}>
                    {feature.sub}
                  </p>
                </div>
                
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-white/20 transition-all duration-500"></div>
                
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base break-keep group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Detail Section - Redesigned */}
        <div className="mt-20 md:mt-32 relative rounded-3xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10"></div>
            <div className="absolute inset-0 z-0">
               <img 
                    src="https://images.unsplash.com/photo-1590248407421-2a5b6d573678?q=80&w=2626&auto=format&fit=crop" 
                    alt="Soft Ground Replacement Diagram" 
                    className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
                />
            </div>

            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-12 p-6 md:p-16">
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                    <div>
                        <span className="text-hnt-blue font-bold tracking-wider text-xs md:text-sm mb-2 block">TECHNOLOGY FOCUS</span>
                        <h3 className="text-2xl md:text-4xl font-sans font-bold text-white mb-2">
                           연약지반대체공법 <br/>
                           <span className="text-white/40 font-montserrat font-light text-xl md:text-2xl">Soft Ground Replacement</span>
                        </h3>
                    </div>
                    
                    <p className="text-white/70 leading-relaxed text-base md:text-lg font-light break-keep">
                        H.N.T의 핵심 기술인 연약지반대체공법은 지반의 지지력을 획기적으로 향상시켜 구조물의 안정성을 보장합니다. 기존 공법 대비 공사 기간을 단축하고 비용을 절감하며, 환경 친화적인 자재를 사용하여 지속 가능한 개발을 실현합니다.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
                        {techItems.map((item, idx) => {
                           const isActive = activeIndex === idx;
                           const isSelected = selectedIndex === idx;
                           const Icon = item.icon;
                           
                           return (
                             <div 
                                key={idx} 
                                className="relative group/item"
                                onMouseEnter={() => setHoverIndex(idx)}
                                onMouseLeave={() => setHoverIndex(null)}
                                onClick={() => setSelectedIndex(prev => prev === idx ? null : idx)}
                             >
                                <div className={`flex items-center gap-3 bg-white/5 p-3 md:p-4 rounded-lg border transition-all duration-300 z-10 relative cursor-pointer 
                                    ${isActive 
                                        ? `border-opacity-100 bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] ${isSelected ? 'border-hnt-blue ring-1 ring-hnt-blue/30' : 'border-white/30'}` 
                                        : 'border-white/5 text-white/60 hover:border-white/20 hover:text-white/80'
                                    }`}
                                >
                                    <div className={`p-1.5 rounded-md transition-colors ${isActive ? 'bg-white/10' : 'bg-transparent'}`}>
                                        <Icon className={`w-4 h-4 md:w-5 md:h-5 flex-shrink-0 transition-colors ${isActive ? item.color : 'text-current'}`} />
                                    </div>
                                    <span className={`text-sm md:text-base font-medium transition-colors ${isActive ? 'text-white' : 'text-current'}`}>
                                        {item.title}
                                    </span>
                                    
                                    {/* Selection Indicator */}
                                    {isSelected && (
                                        <div className="absolute right-3 w-1.5 h-1.5 rounded-full bg-hnt-blue animate-pulse"></div>
                                    )}
                                </div>
                             </div>
                           );
                        })}
                    </div>
                    <p className="text-xs text-white/30 mt-2">* 항목을 클릭하면 설명이 고정됩니다.</p>
                </div>
                
                {/* Visual Graphic Area */}
                <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[500px]">
                    
                    {/* Placeholder / Default View */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeIndex !== null ? 'opacity-0 scale-95 blur-sm pointer-events-none' : 'opacity-100 scale-100 blur-0'}`}>
                        <div className="relative p-8 md:p-10 border border-white/5 rounded-2xl bg-black/20 backdrop-blur-sm">
                           <div className="absolute -top-6 -right-6 w-24 h-24 bg-hnt-blue/20 rounded-full blur-2xl"></div>
                           <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-hnt-green/10 rounded-full blur-3xl"></div>
                           
                           <div className="relative text-center space-y-2">
                             <div className="text-6xl md:text-7xl font-montserrat font-black text-white/10">20+</div>
                             <div className="text-2xl md:text-3xl font-bold text-white">Years of<br/>Experience</div>
                             <div className="h-1 w-20 bg-hnt-blue mx-auto mt-4 rounded-full"></div>
                           </div>
                        </div>
                    </div>

                    {/* 1. Stability Visualization (Force Dispersion) - Index 0 */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${activeIndex === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
                        <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center h-full max-h-[500px]">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-hnt-blue/10 rounded-full blur-[60px]"></div>
                           
                           <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-6 flex items-center gap-2 relative z-10 shrink-0">
                              <Layers className="text-hnt-blue" size={20} />
                              지중 응력 변화 (Stress)
                           </h4>

                           {/* Mobile Stacked Layout, Desktop Row Layout */}
                           <div className="flex flex-col md:flex-row w-full gap-6 md:gap-4 relative z-10 flex-1 min-h-0">
                              
                              {/* Left: Conventional */}
                              <div className="flex-1 flex flex-col items-center relative border-b md:border-b-0 border-white/10 pb-4 md:pb-0 min-h-0">
                                 <div className="text-[10px] md:text-xs text-white/40 mb-2 md:mb-4 uppercase font-bold tracking-wider">Old Method</div>
                                 
                                 {/* Red Plate */}
                                 <div className="w-16 h-3 md:w-20 md:h-4 bg-red-600 rounded-sm shadow-[0_0_15px_rgba(220,38,38,0.6)] z-20 relative flex items-center justify-center shrink-0">
                                    <span className="text-[8px] font-bold text-black/50">PLATE</span>
                                 </div>

                                 {/* Force Animation (Reverted Height) */}
                                 <div className="relative w-full flex justify-center flex-1 overflow-hidden min-h-[100px] md:min-h-[160px]">
                                    <div className="flex gap-1.5 mt-1">
                                       {[1, 2, 3].map((i) => (
                                          <div key={i} className="relative w-2 md:w-3 h-full bg-gradient-to-b from-red-600 via-red-900/50 to-transparent rounded-b-lg overflow-hidden">
                                             <div className="absolute inset-0 bg-white/20 animate-[translate-y_1.5s_linear_infinite]" style={{ top: '-100%', animationDuration: `${0.8 + i * 0.2}s` }}></div>
                                             <div className="absolute bottom-0 w-full flex justify-center pb-1">
                                                <ArrowDown size={10} className="text-red-500 animate-bounce" />
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                    <div className="absolute bottom-0 w-12 h-12 bg-red-600/40 blur-2xl rounded-full animate-pulse"></div>
                                 </div>
                                 
                                 <div className="absolute bottom-0 md:bottom-2 text-lg md:text-xl font-bold text-red-500 font-mono">20.0 t/㎡</div>
                              </div>

                              {/* Vertical/Horizontal Divider */}
                              <div className="hidden md:block w-[1px] h-full bg-white/10 relative mt-4">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0C10] p-1">
                                    <TrendingDown size={16} className="text-white/30" />
                                 </div>
                              </div>

                              {/* Right: H.N.T */}
                              <div className="flex-1 flex flex-col items-center relative pt-4 md:pt-0 min-h-0">
                                 <div className="text-[10px] md:text-xs text-hnt-blue mb-2 md:mb-4 uppercase font-bold tracking-wider">H.N.T Solution</div>
                                 
                                 {/* Blue Plate */}
                                 <div className="w-20 h-3 md:w-24 md:h-4 bg-hnt-blue rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.6)] z-20 relative flex items-center justify-center shrink-0">
                                    <span className="text-[8px] font-bold text-white/50">PLATE</span>
                                 </div>

                                 {/* Dispersed Force Animation */}
                                 <div className="relative w-full flex justify-center flex-1 overflow-hidden min-h-[100px] md:min-h-[160px]">
                                    {/* Evenly distributed points within plate width with angles */}
                                    <div className="w-20 md:w-24 flex justify-between mt-1 h-full relative z-10"> 
                                       {[40, 20, 0, -20, -40].map((deg, i) => (
                                          <div 
                                            key={i} 
                                            className="relative w-1 md:w-1.5 h-[60%] bg-gradient-to-b from-hnt-blue via-hnt-blue/50 to-transparent opacity-80 rounded-b-full origin-top" 
                                            style={{ 
                                                transform: `rotate(${deg}deg)`,
                                            }}
                                          >
                                               <div className="absolute inset-0 bg-white/30 animate-[translate-y_2.2s_linear_infinite]" style={{ top: '-100%', animationDelay: `${i*0.2}s` }}></div>
                                          </div>
                                       ))}
                                    </div>
                                    <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-hnt-blue/20 to-transparent blur-3xl rounded-[50%]"></div>
                                 </div>

                                 <div className="absolute bottom-0 md:bottom-2 text-lg md:text-xl font-bold text-hnt-blue font-mono">0.2 t/㎡</div>
                              </div>

                           </div>
                        </div>
                    </div>

                    {/* 2. Efficiency Visualization (Bar Charts) - Index 1 */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${activeIndex === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
                        <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center h-full max-h-[500px]">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px]"></div>
                           
                           <h4 className="text-base md:text-lg font-bold text-white mb-4 md:mb-5 flex items-center gap-2">
                              <Activity className="text-purple-400" size={20} />
                              효율성 비교 분석
                           </h4>

                           {/* Depth Chart */}
                           <div className="mb-4 md:mb-6 group/chart">
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-xs md:text-sm text-white/60 font-medium">시공 심도 (Depth)</span>
                                 <span className="text-white font-bold text-sm md:text-base">-81% 축소</span>
                              </div>
                              <div className="relative h-8 md:h-10 w-full bg-white/5 rounded-lg overflow-hidden flex items-center">
                                 {/* Conventional Bar */}
                                 <div className="absolute inset-0 w-full bg-white/5 flex items-center px-3 justify-between">
                                    <span className="text-[9px] md:text-[10px] text-white/30 z-10">기존 Pile</span>
                                    <span className="text-[9px] md:text-[10px] text-white/50 font-bold font-mono">18.6m</span>
                                 </div>
                                 <div className="absolute right-0 top-0 bottom-0 w-[81%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTcyMDMzIi8+CjxwYXRoIGQ9Ik0wIDhMOCAwWk04IDhMOCA4WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50 border-l border-dashed border-white/20"></div>
                                 
                                 {/* HNT Bar */}
                                 <div 
                                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-r-lg flex items-center justify-end px-3 shadow-[2px_0_10px_rgba(168,85,247,0.5)] z-20 transition-all duration-[2500ms] ease-out delay-200"
                                    style={{ width: activeIndex === 1 ? '19%' : '100%' }}
                                 >
                                    <span className="text-[9px] md:text-[10px] font-bold text-white whitespace-nowrap">3.5m</span>
                                 </div>
                              </div>
                           </div>

                           {/* Time Chart */}
                           <div className="mb-4 md:mb-6 group/chart">
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-xs md:text-sm text-white/60 font-medium">공사 기간 (Time)</span>
                                 <span className="text-hnt-blue font-bold text-sm md:text-base">-70% 단축</span>
                              </div>
                              <div className="relative h-8 md:h-10 w-full bg-white/5 rounded-lg overflow-hidden flex items-center">
                                 <div className="absolute inset-0 w-full bg-white/5 flex items-center px-3 justify-between">
                                    <span className="text-[9px] md:text-[10px] text-white/30 z-10">기존 Pile</span>
                                    <span className="text-[9px] md:text-[10px] text-white/50 font-bold font-mono">40일</span>
                                 </div>
                                 <div className="absolute right-0 top-0 bottom-0 w-[70%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTcyMDMzIi8+CjxwYXRoIGQ9Ik0wIDhMOCAwWk04IDhMOCA4WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50 border-l border-dashed border-white/20"></div>
                                 
                                 {/* HNT Bar */}
                                 <div 
                                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-hnt-blue to-blue-500 rounded-r-lg flex items-center justify-end px-3 shadow-[2px_0_10px_rgba(59,130,246,0.5)] z-20 transition-all duration-[2500ms] ease-out delay-200"
                                    style={{ width: activeIndex === 1 ? '30%' : '100%' }}
                                 >
                                    <span className="text-[9px] md:text-[10px] font-bold text-white whitespace-nowrap">12일</span>
                                 </div>
                              </div>
                           </div>

                           {/* Cost Chart */}
                           <div className="group/chart">
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-xs md:text-sm text-white/60 font-medium">공사 비용 (Cost)</span>
                                 <span className="text-hnt-green font-bold text-sm md:text-base">-30% 절감</span>
                              </div>
                              <div className="relative h-8 md:h-10 w-full bg-white/5 rounded-lg overflow-hidden flex items-center">
                                 <div className="absolute inset-0 w-full bg-white/5 flex items-center px-3 justify-between">
                                    <span className="text-[9px] md:text-[10px] text-white/30 z-10">기존 Pile</span>
                                    <span className="text-[9px] md:text-[10px] text-white/50 font-bold font-mono">2.6억</span>
                                 </div>
                                 <div className="absolute right-0 top-0 bottom-0 w-[30%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTcyMDMzIi8+CjxwYXRoIGQ9Ik0wIDhMOCAwWk04IDhMOCA4WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-50 border-l border-dashed border-white/20"></div>
                                 
                                 {/* HNT Bar */}
                                 <div 
                                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-hnt-green to-emerald-500 rounded-r-lg flex items-center justify-end px-3 shadow-[2px_0_10px_rgba(45,106,79,0.5)] z-20 transition-all duration-[2500ms] ease-out delay-200"
                                    style={{ width: activeIndex === 1 ? '70%' : '100%' }}
                                 >
                                    <span className="text-[9px] md:text-[10px] font-bold text-white whitespace-nowrap">1.8억</span>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10 flex flex-col items-end gap-1">
                              <p className="text-[9px] md:text-[10px] text-white/40 font-light tracking-wide text-right">
                                * Reference: 2013 보성군 조성농공단지 교량기초
                              </p>
                           </div>
                        </div>
                    </div>

                    {/* 3. Eco-Friendly Visualization - Index 2 */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${activeIndex === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
                        <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center h-full max-h-[500px]">
                           <div className="absolute top-0 right-1/4 w-40 h-40 bg-hnt-green/10 rounded-full blur-[60px]"></div>
                           
                           <h4 className="text-base md:text-lg font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                              <Recycle className="text-hnt-green" size={24} />
                              친환경 자재 활용 (Eco-Friendly)
                           </h4>

                           <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                              {/* Central Hub */}
                              <div className="absolute inset-0 border-2 border-dashed border-hnt-green/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                              <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                              
                              {/* Core Icon */}
                              <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-hnt-green to-emerald-800 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(45,106,79,0.5)]">
                                 <Leaf className="w-10 h-10 text-white animate-pulse" />
                              </div>

                              {/* Orbiting Elements */}
                              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-[#0B0C10] px-2 py-1 border border-hnt-green/30 rounded-full text-[10px] text-hnt-green font-bold whitespace-nowrap shadow-lg">
                                 Recycled
                              </div>
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-[#0B0C10] px-2 py-1 border border-hnt-green/30 rounded-full text-[10px] text-hnt-green font-bold whitespace-nowrap shadow-lg">
                                 Non-Toxic
                              </div>
                              <div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 bg-[#0B0C10] px-2 py-1 border border-hnt-green/30 rounded-full text-[10px] text-hnt-green font-bold whitespace-nowrap shadow-lg">
                                 Sustainable
                              </div>
                              <div className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 bg-[#0B0C10] px-2 py-1 border border-hnt-green/30 rounded-full text-[10px] text-hnt-green font-bold whitespace-nowrap shadow-lg">
                                 Efficient
                              </div>
                           </div>

                           <p className="mt-8 text-white/60 text-center text-sm md:text-base font-light max-w-sm">
                             산업 부산물을 재활용한 친환경 고화제를 사용하여<br/> 
                             <span className="text-white font-medium">탄소 배출을 줄이고 자연 환경을 보존</span>합니다.
                           </p>
                        </div>
                    </div>

                    {/* 4. Precision Construction Visualization - Index 3 */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${activeIndex === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
                        <div className="w-full max-w-2xl bg-[#0B0C10] border border-white/10 rounded-2xl p-5 md:p-8 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center h-full max-h-[500px]">
                           <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-hnt-orange/10 rounded-full blur-[60px]"></div>
                           
                           <h4 className="text-base md:text-lg font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                              <ShieldCheck className="text-hnt-orange" size={24} />
                              정밀 시공 및 품질 관리 (Quality)
                           </h4>

                           <div className="relative w-full max-w-xs space-y-3">
                              {/* Scan Animation Overlay */}
                              <div className="absolute top-0 left-0 w-full h-1 bg-hnt-orange/50 shadow-[0_0_15px_rgba(232,93,4,0.8)] z-20 animate-[scan_2s_ease-in-out_infinite]"></div>
                              <style>{`
                                @keyframes scan {
                                  0%, 100% { top: 0%; opacity: 0; }
                                  10% { opacity: 1; }
                                  90% { opacity: 1; }
                                  100% { top: 100%; opacity: 0; }
                                }
                              `}</style>

                              {[
                                { label: "Design Verification", status: "Verified" },
                                { label: "Material Testing", status: "Passed" },
                                { label: "Field Application", status: "Monitoring" },
                                { label: "Final Inspection", status: "Approved" }
                              ].map((step, i) => (
                                <div key={i} className="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-lg relative overflow-hidden group/step">
                                   <div className={`absolute left-0 top-0 bottom-0 w-1 bg-hnt-orange transition-all duration-500`} style={{ height: activeIndex === 3 ? '100%' : '0%', transitionDelay: `${i*0.2}s` }}></div>
                                   <div className="flex items-center gap-3 pl-2">
                                      <Search size={14} className="text-white/30" />
                                      <span className="text-sm text-white/80 font-medium">{step.label}</span>
                                   </div>
                                   <span className="text-xs font-bold text-hnt-orange tracking-wider uppercase flex items-center gap-1">
                                      {step.status} <CheckCircle2 size={12} />
                                   </span>
                                </div>
                              ))}
                           </div>

                           <div className="mt-8 flex gap-4 text-center">
                              <div>
                                 <div className="text-2xl font-bold text-white font-mono">100%</div>
                                 <div className="text-[10px] text-white/40 uppercase tracking-widest">Inspection Rate</div>
                              </div>
                              <div className="w-[1px] bg-white/10"></div>
                              <div>
                                 <div className="text-2xl font-bold text-white font-mono">0%</div>
                                 <div className="text-[10px] text-white/40 uppercase tracking-widest">Defect Rate</div>
                              </div>
                           </div>
                        </div>
                    </div>
                    
                    <style>{`
                              @keyframes translate-y {
                                0% { transform: translateY(0); }
                                100% { transform: translateY(200%); }
                              }
                           `}</style>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;