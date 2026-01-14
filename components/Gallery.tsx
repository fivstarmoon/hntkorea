import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
             <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-4">Major Projects</h2>
             <p className="text-white/60 font-light max-w-lg">
               견고한 기초 위에 세워진 H.N.T의 주요 시공 사례를 소개합니다.
             </p>
          </div>
          <button className="mt-8 md:mt-0 text-hnt-orange uppercase tracking-widest text-sm hover:text-white transition-colors font-bold">
             모든 프로젝트 보기 &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[1200px] md:h-[800px]">
          <div className="relative h-full group overflow-hidden bg-gray-900 border border-white/10 rounded-sm">
             <img 
               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" 
               alt="Construction Site" 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
               <span className="text-hnt-orange font-bold tracking-widest text-sm mb-2">INFRASTRUCTURE</span>
               <h3 className="text-3xl font-sans font-bold text-white mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">인천 신항만 기초 공사</h3>
               <p className="text-white/70 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                 대규모 매립지 연약지반 개량 프로젝트
               </p>
             </div>
          </div>
          
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative group overflow-hidden bg-gray-900 border border-white/10 rounded-sm">
               <img 
                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                 alt="Modern Building" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
               />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-sans font-bold text-white mb-1">도심 랜드마크 타워</h3>
                  <p className="text-sm text-hnt-green uppercase tracking-widest font-bold">Urban Development</p>
                </div>
            </div>
            <div className="relative group overflow-hidden bg-gray-900 border border-white/10 rounded-sm">
               <img 
                 src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop" 
                 alt="Eco Friendly" 
                 className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-sans font-bold text-white mb-1">풍력 발전 단지 조성</h3>
                  <p className="text-sm text-blue-400 uppercase tracking-widest font-bold">Eco-Energy Solution</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;