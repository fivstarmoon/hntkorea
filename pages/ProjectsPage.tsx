import React, { useEffect } from 'react';
import ProjectMap from '../components/ProjectMap';
import { Map, Calendar, Award, ArrowDown } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative">
      {/* Background Ambient Light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-hnt-blue/10 via-black/40 to-transparent pointer-events-none z-0"></div>

      {/* Hero Header Section */}
      <section className="relative z-10 pt-32 pb-16 px-6 text-center overflow-hidden">
         <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/5 rounded-full animate-spin-slow opacity-20 hidden md:block"></div>
         <div className="absolute bottom-0 right-10 w-40 h-40 border border-white/5 rounded-full animate-reverse-spin opacity-20 hidden md:block border-dashed"></div>

         <div className="max-w-5xl mx-auto space-y-8 animate-[fadeInUp_0.8s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-hnt-blue shadow-[0_0_15px_rgba(59,130,246,0.1)]">
               <Map size={14} />
               <span className="text-xs font-bold tracking-[0.2em] uppercase">National Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-black text-white leading-tight tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">History</span> of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hnt-blue to-cyan-300 relative">
                Excellence
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-hnt-blue/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              2007년부터 현재까지, H.N.T는 끊임없는 도전과 혁신으로<br className="hidden md:block"/> 
              대한민국의 지반을 더 단단하고 안전하게 만들어왔습니다.
            </p>
         </div>

         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-16 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
             {/* Stat 1 */}
             <div className="group relative p-6 bg-[#0B0C10]/80 border border-white/10 rounded-2xl hover:border-hnt-blue/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Since</span>
                   <Calendar className="w-5 h-5 text-hnt-orange opacity-80" />
                </div>
                <div className="text-4xl font-sans font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">2007</div>
                <div className="text-sm text-white/50">설립 이후 지속적인 성장</div>
             </div>

             {/* Stat 2 */}
             <div className="group relative p-6 bg-[#0B0C10]/80 border border-white/10 rounded-2xl hover:border-hnt-blue/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Projects</span>
                   <Map className="w-5 h-5 text-hnt-blue opacity-80" />
                </div>
                <div className="text-4xl font-sans font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">Nationwide</div>
                <div className="text-sm text-white/50">전국 각지의 시공 실적 보유</div>
             </div>

             {/* Stat 3 */}
             <div className="group relative p-6 bg-[#0B0C10]/80 border border-white/10 rounded-2xl hover:border-hnt-blue/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Expertise</span>
                   <Award className="w-5 h-5 text-hnt-green opacity-80" />
                </div>
                <div className="text-4xl font-sans font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">Specialized</div>
                <div className="text-sm text-white/50">연약지반 특화 기술력</div>
             </div>
         </div>
         
         <div className="flex justify-center mt-12 animate-bounce opacity-30">
            <ArrowDown className="text-white" />
         </div>
      </section>

      {/* Map Content Integration */}
      <div className="relative z-10 pb-20">
         {/* We reduce the top padding of the map component via class overriding or just let it sit naturally below the header */}
         <ProjectMap />
      </div>
    </div>
  );
};

export default ProjectsPage;