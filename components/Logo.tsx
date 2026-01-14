import React from 'react';

// [사용 가이드]
// 1. 왼쪽: 기존 H.N.T 심볼 (SVG)
// 2. 중앙: 회사 이름 (H.N.T / Human Nature Tech)
// 3. 오른쪽: 브랜드 이미지 (/logo.png - Gritec 등)
// * 주의: /logo.png 파일이 public 폴더에 있어야 합니다.

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  const brandImageSrc = "/logo.png"; 

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* 1. 기본 심볼 (나비 모양 SVG) */}
      <svg width="38" height="38" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 md:w-[45px] md:h-[45px]">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E85D04" /> {/* Orange - Human */}
            <stop offset="50%" stopColor="#3B82F6" /> {/* Blue - Tech */}
            <stop offset="100%" stopColor="#2D6A4F" /> {/* Green - Nature */}
          </linearGradient>
        </defs>
        
        <path 
          d="M 28 25 
             C 8 38, 8 62, 28 75 
             C 38 70, 45 55, 50 50 
             C 55 45, 62 30, 72 25 
             C 92 38, 92 62, 72 75"
          stroke="url(#logo-gradient)" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        <circle cx="28" cy="25" r="4" fill="#E85D04" />
        <circle cx="72" cy="75" r="4" fill="#2D6A4F" />
      </svg>
      
      {/* 2. 회사 이름 텍스트 */}
      <div className="flex flex-col justify-center shrink-0">
        <span className="text-xl md:text-2xl font-montserrat font-bold tracking-widest text-white leading-none">H.N.T</span>
        <span className="text-[0.55rem] md:text-[0.6rem] text-white/50 tracking-[0.25em] uppercase mt-0.5 font-medium">Human Nature Tech</span>
      </div>

      {/* 3. 구분선 및 브랜드 이미지 (회사명 오른쪽) */}
      <div className="flex items-center ml-2 md:ml-3">
         {/* 구분선 */}
         <div className="h-6 md:h-8 w-[1px] bg-white/20 mr-3 md:mr-4 hidden sm:block"></div>
         
         {/* 브랜드 이미지 컨테이너 */}
         {/* 로고가 어두운 색상일 경우를 대비해 흰색 배경 박스를 추가하여 가시성을 확보합니다. */}
         <div className="bg-white rounded-[2px] px-2 py-1 flex items-center h-8 md:h-10 shadow-lg shadow-black/20">
             <img 
                src={brandImageSrc} 
                alt="Brand Logo" 
                className="h-full w-auto object-contain max-w-[80px] md:max-w-[120px]"
                onError={(e) => {
                  // 이미지가 로드되지 않을 때(경로 오류 등) 깨진 아이콘 대신 숨김 처리
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.style.display = 'none';
                  // 구분선도 같이 숨김
                  const divider = e.currentTarget.parentElement!.previousElementSibling;
                  if(divider) (divider as HTMLElement).style.display = 'none';
                }}
             />
         </div>
      </div>
    </div>
  );
};

export default Logo;