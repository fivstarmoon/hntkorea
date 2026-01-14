import React from 'react';
import { Download, ClipboardList, ArrowRight, FileText, ChevronRight } from 'lucide-react';

const BrochureHistory: React.FC = () => {
  return (
    <section id="resources" className="relative py-24 px-6 z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-hnt-green font-bold tracking-wider text-sm mb-3 block uppercase">Downloads & Specs</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
              Resources Center
            </h2>
            <p className="text-white/50 text-lg font-light leading-relaxed">
              H.N.T의 기술력이 담긴 브로셔와 상세 기술 사양서를 통해<br className="hidden md:block" /> 
              더 자세한 정보를 확인하실 수 있습니다.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm font-medium">
             전체 자료실 바로가기 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Brochure Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0F1115]/80 border border-white/10 hover:border-hnt-blue/50 transition-all duration-500">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hnt-blue/5 rounded-full blur-[80px] group-hover:bg-hnt-blue/10 transition-colors"></div>
            
            <div className="relative p-8 md:p-12 flex flex-col h-full">
              <div className="flex items-start justify-between mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hnt-blue/20 to-transparent border border-hnt-blue/20 flex items-center justify-center text-hnt-blue shadow-lg shadow-hnt-blue/5">
                   <FileText size={32} />
                 </div>
                 <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    PDF 5.2MB
                 </div>
              </div>
              
              <div className="flex-1">
                 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-hnt-blue transition-colors">
                   Company Brochure
                 </h3>
                 <p className="text-white/60 leading-relaxed font-light mb-8">
                   (주)H.N.T의 회사 소개, 핵심 공법 설명, 그리고 주요 프로젝트 포트폴리오가 수록된 최신 브로셔입니다.
                 </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-hnt-blue hover:text-white font-bold py-4 rounded-xl transition-all duration-300">
                <Download size={20} />
                <span>브로셔 다운로드</span>
              </button>
            </div>
          </div>

          {/* Tech Spec Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0F1115]/80 border border-white/10 hover:border-hnt-green/50 transition-all duration-500">
             {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-hnt-green/5 rounded-full blur-[80px] group-hover:bg-hnt-green/10 transition-colors"></div>

            <div className="relative p-8 md:p-12 flex flex-col h-full">
               <div className="flex items-start justify-between mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hnt-green/20 to-transparent border border-hnt-green/20 flex items-center justify-center text-hnt-green shadow-lg shadow-hnt-green/5">
                   <ClipboardList size={32} />
                 </div>
                 <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold tracking-widest text-white/40 uppercase">
                    Technical Docs
                 </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-hnt-green transition-colors">
                  Technical Specifications
                </h3>
                <p className="text-white/60 leading-relaxed font-light mb-8">
                  연약지반대체공법의 상세한 기술 사양, 공법 비교 자료 및 시공 시방서를 확인하실 수 있습니다.
                </p>
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 bg-transparent border border-white/20 text-white hover:border-hnt-green hover:text-hnt-green font-bold py-4 rounded-xl transition-all duration-300">
                <span>기술자료 상세보기</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureHistory;