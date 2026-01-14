import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      
      {/* Abstract Geometric Decorations */}
      <div className="absolute top-1/4 left-0 md:left-20 w-40 h-40 md:w-64 md:h-64 border border-white/5 rounded-full animate-spin-slow opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 md:right-20 w-60 h-60 md:w-96 md:h-96 border border-white/5 rounded-full animate-reverse-spin opacity-30 pointer-events-none border-dashed"></div>
      
      <div className="space-y-6 md:space-y-8 z-10 max-w-7xl mx-auto mt-10 relative">
        
        {/* Top Label */}
        <div className="flex items-center justify-center gap-4 animate-[fadeIn_1s_ease-out_0.5s_both]">
           <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-white/30"></div>
           <div className="flex gap-2 md:gap-3 text-[10px] md:text-sm font-montserrat font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
              <span className="text-hnt-orange drop-shadow-[0_0_8px_rgba(232,93,4,0.5)]">Human</span>
              <span className="text-white/20">/</span>
              <span className="text-hnt-green drop-shadow-[0_0_8px_rgba(45,106,79,0.5)]">Nature</span>
              <span className="text-white/20">/</span>
              <span className="text-hnt-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">Technology</span>
           </div>
           <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-black text-white leading-[1.15] md:leading-[1.1] animate-[fadeInUp_1s_ease-out_0.8s_both] tracking-tight">
          <span className="block mb-2 md:mb-4">
            <span className="relative inline-block">
              사람
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-hnt-orange/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>과 
            <span className="relative inline-block ml-3 md:ml-4">
              자연
              <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-hnt-green/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>,
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-hnt-blue via-blue-200 to-white drop-shadow-sm">
            기술의 완벽한 조화
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-white/70 text-base md:text-2xl font-light max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_1s_ease-out_1.1s_both] font-sans px-4 break-keep">
          <strong className="text-white font-bold">H.N.T</strong>는 독보적인 <span className="text-hnt-blue font-medium border-b border-hnt-blue/30 pb-0.5">연약지반처리 토탈솔루션</span>을 통해 
          가장 안전하고 지속 가능한 내일을 건설합니다.
        </p>

        {/* Buttons */}
        <div className="pt-6 md:pt-10 animate-[fadeIn_1s_ease-out_1.4s_both] flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full px-6 md:px-0">
          <a href="#technology" className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black font-bold tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center">
            <span className="relative z-10 flex items-center justify-center gap-2">
              기술 소개 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </a>
          
          <Link to="/projects" className="w-full sm:w-auto group px-8 py-4 bg-white/5 border border-white/20 hover:border-white/50 text-white font-medium tracking-wider rounded-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 text-center">
            시공 실적 확인
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-white flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll Down</span>
        <ChevronDown size={20} className="md:w-6 md:h-6" />
      </div>
      
      {/* Background Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;