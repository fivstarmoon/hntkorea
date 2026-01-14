import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Building2, Map, Lock, Unlock, Globe, Construction } from 'lucide-react';

// Region Types
type RegionId = 'seoul' | 'gyeonggi' | 'gangwon' | 'chungnam' | 'chungbuk' | 'jeonbuk' | 'jeonnam' | 'gwangju' | 'gyeongbuk' | 'gyeongnam' | 'jeju' | 'overseas';

interface Project {
  title: string;
  year: string;
  type: string;
  location: string;
}

// Data for Projects
const projectData: Record<RegionId, Project[]> = {
  seoul: [
    { title: "서울 성수동1가 656-611 사옥(10F) 고화토기초처리공", year: "2025", type: "고화토공법", location: "디자인 오" },
  ],
  gyeonggi: [],
  gangwon: [],
  chungnam: [],
  chungbuk: [],
  jeonbuk: [],
  jeonnam: [
    { title: "무안국제공항 관로매설물지반보강", year: "2008", type: "지반보강", location: "광주세관" },
    { title: "상리천 정비공사(1차) Box암거 기초", year: "2008", type: "기초처리", location: "목포시청" },
    { title: "상리천 정비공사(2차) Box암거 기초", year: "2009", type: "기초처리", location: "목포시청" },
    { title: "상리천 정비공사(3차) Box암거 기초", year: "2009", type: "기초처리", location: "목포시청" },
    { title: "상리천 정비공사(4차) Box암거 기초", year: "2010", type: "기초처리", location: "목포시청" },
    { title: "조성농공단지(1차) 수로교 교량 기초", year: "2011", type: "고화토공법", location: "보성군청" },
    { title: "장흥농공단지 진입도로 P.B.D대체", year: "2011.06", type: "연약지반", location: "장흥군청" },
    { title: "양간천 정비공사 하상연약지반 세굴방지", year: "2011", type: "세굴방지", location: "무안군청" },
    { title: "손양원유적지 목교 교량 기초", year: "2012", type: "고화토공법", location: "여수시청" },
    { title: "상동 초기우수저류시설 기초", year: "2012", type: "연약지반", location: "목포시청" },
    { title: "조성농공단지(2차) 파형강판 교량 기초", year: "2013", type: "고화토공법", location: "보성군청" },
    { title: "평리~상고간 중고교 교량 기초", year: "2013", type: "고화토공법", location: "강진군청" },
    { title: "율촌하수처리장 도로지반 P.B.D대체", year: "2014", type: "연약지반", location: "여수시청" },
    { title: "율촌하수처리장 6.0m성토 단지도로", year: "2014", type: "연약지반", location: "여수시청" },
    { title: "환경생활폐기물처리시설 진입도로", year: "2014", type: "연약지반", location: "목포시청" },
    { title: "노안 농공단지 폐수처리장 기초", year: "2014", type: "연약지반", location: "나주시청" },
    { title: "남악 롯데아울렛 도로지반 P.B.D대체", year: "2014", type: "연약지반", location: "GS건설" },
    { title: "남악 롯데아울렛 주차장지반 P.B.D대체", year: "2014", type: "연약지반", location: "GS건설" },
    { title: "남악신도시 신흥교 교량 기초", year: "2016", type: "고화토공법", location: "GS건설" },
    { title: "원동산 소하천 BOX 1,2 교량 기초", year: "2016", type: "고화토공법", location: "무안군청" },
    { title: "반곡지구 농어촌 저류시설 기초", year: "2016", type: "연약지반", location: "함평군청" },
    { title: "강진군 안양면사무소(3F) 기초", year: "2018", type: "고화토공법", location: "강진군청" },
    { title: "세풍산단 진입도로 P.B.D대체", year: "2019.05", type: "연약지반", location: "광양자유구역청" },
    { title: "세풍산단 도로하수관로 관보호공", year: "2019", type: "고화토공법", location: "광양자유구역청" },
    { title: "광양시 세풍산단공업용수도 관로기초", year: "2019", type: "연약지반", location: "광양자유구역청" },
    { title: "회진 복지회관주차장 기초", year: "2020", type: "연약지반", location: "장흥군청" },
    { title: "보성군 중수면 양수장 및 전기실 기초", year: "2020", type: "연약지반", location: "한국농촌공사" },
    { title: "보성 한국차문화공원조성사업 교량 기초", year: "2021", type: "고화토공법", location: "보성군청" },
    { title: "동강면 원매곡마을 하수처리장 기초", year: "2021", type: "연약지반", location: "고흥군청" },
    { title: "도덕면 내봉마을 하수처리장 기초", year: "2021", type: "연약지반", location: "고흥군청" },
    { title: "풍양면 매곡마을 하수처리장 기초", year: "2021", type: "연약지반", location: "고흥군청" },
    { title: "담양 에코산단5로90 창고(3F) 신축 기초", year: "2021", type: "고화토공법", location: "HNT건설" },
    { title: "해보면 구계지구 구계1교량 기초", year: "2022", type: "고화토공법", location: "함평군청" },
    { title: "순천 동외동 205-9 근생시설(7F) 기초", year: "2022", type: "고화토공법", location: "㈜온터" },
    { title: "순천 가곡동 1091-2 근생시설(4F) 기초", year: "2023", type: "고화토공법", location: "㈜일승건설" },
    { title: "자유시장 침하구간 진입보도 기초", year: "2024", type: "연약지반", location: "목포시청" },
    { title: "도덕면 가동지구 하수처리장 기초", year: "2024", type: "연약지반", location: "고흥군청" },
    { title: "전남 순천 연향동 1436-3 근생시설(5F) 기초", year: "2024", type: "고화토공법", location: "LH공사" },
    { title: "전남 곡성군 청사 건립공사 기초", year: "2024", type: "고화토공법", location: "곡성군청" },
    { title: "봉림리 133 벌교 창고시설 신축 기초", year: "2024", type: "고화토공법", location: "벌교농산" },
    { title: "순천 야흥동 첨단산업단지 도로 기초", year: "2025", type: "연약지반", location: "LH공사" },
    { title: "순천첨단산업단지도로 우수관·전력구 관보호공", year: "2025", type: "고화토공법", location: "LH공사" },
    { title: "농촌 신활력베이스캠프 신축 기초", year: "2025", type: "고화토공법", location: "고흥군청" },
    { title: "대서면 송강지구 하수처리장 기초", year: "2025", type: "연약지반", location: "고흥군청" }
  ],
  gwangju: [
    { title: "광주 봉선동 라이크빌딩(8F) 고화토기초처리공", year: "2007", type: "고화토공법", location: "㈜남양종합건설" },
    { title: "광주 진월동 근린생활시설(5F) 고화토기초처리공", year: "2015", type: "고화토공법", location: "여래종합건설㈜" },
    { title: "광주 지산동 다가구주택(5F) 고화토기초처리공", year: "2016", type: "고화토공법", location: "라도건설㈜" },
    { title: "우회도로 연약지반 기초처리공", year: "2016", type: "연약지반", location: "조선이공대학교" },
    { title: "광주 용봉동 근생시설(2F) 고화토기초처리공", year: "2020", type: "고화토공법", location: "광일건축" },
    { title: "광주 학동 868-18 근생시설(4F) 고화토기초처리공", year: "2020", type: "고화토공법", location: "㈜김송" },
    { title: "광주 마륵동 30-1 근생시설(4F) 고화토기초처리공", year: "2021", type: "고화토공법", location: "대동종합건설㈜" },
    { title: "광주 광산구 흑석동 635 근생시설(5F) 고화토기초처리공", year: "2024", type: "고화토공법", location: "LH공사" },
    { title: "광주 남구 주월동 91-4 근생시설(5F) 고화토기초처리공", year: "2024", type: "고화토공법", location: "LH공사" },
  ],
  gyeongbuk: [],
  gyeongnam: [
    { title: "부봉지구 도로연약지반 P.B.D대체 연약지반 기초처리공", year: "2015.10", type: "연약지반", location: "김해시청" },
    { title: "부봉지구 도로지반개량 및 Box암거 연약지반 기초처리공", year: "2015", type: "기초처리", location: "김해시청" },
    { title: "경남 김해시 능천 1·2·3교 연약지반 기초처리공", year: "2017", type: "기초처리", location: "고려개발㈜" },
  ],
  jeju: [],
  overseas: [
    { title: "Vietnam / Myanmar Bago Factory & Warehouse G.E.T Foundation", year: "2017", type: "G.E.T", location: "Poongkuk" },
  ]
};

const ProjectMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<RegionId>('jeonnam');
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleEnter = (id: RegionId) => {
    if (!isLocked) {
      setActiveRegion(id);
    }
  };

  const handleClick = (e: React.MouseEvent, id: RegionId) => {
    e.stopPropagation(); // Prevent bubbling if needed

    // Clear existing timers
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    setActiveRegion(id);
    setIsLocked(true);
    setTimeLeft(3);

    // Countdown interval
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    // Unlock timeout
    timeoutRef.current = setTimeout(() => {
      setIsLocked(false);
      setTimeLeft(0);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 3000);
  };

  const getRegionName = (id: RegionId) => {
    switch(id) {
      case 'seoul': return '서울특별시';
      case 'gyeonggi': return '경기도';
      case 'gangwon': return '강원도';
      case 'chungnam': return '충청남도';
      case 'chungbuk': return '충청북도';
      case 'jeonbuk': return '전라북도';
      case 'jeonnam': return '전라남도';
      case 'gwangju': return '광주광역시';
      case 'gyeongbuk': return '경상북도';
      case 'gyeongnam': return '경상남도';
      case 'jeju': return '제주특별자치도';
      case 'overseas': return 'Overseas Projects';
      default: return '';
    }
  };

  return (
    <section id="projects-map" className="relative py-0 px-4 md:px-6 z-10 bg-transparent text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        
        {/* Left: Map Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="mb-4 md:mb-8 text-center lg:text-left w-full pl-0 md:pl-4 relative">
             <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
               <Map className="text-hnt-blue w-6 h-6 md:w-8 md:h-8" />
               Project Map
             </h2>
             <p className="text-white/40 text-sm md:text-base">지도를 클릭하면 목록이 3초간 고정됩니다.</p>
          </div>

          <div className="relative w-full max-w-lg lg:max-w-full aspect-[3/4] p-0 md:p-4 mx-auto">
             {/* Overseas Button (Floating) */}
             <button
                onClick={(e) => handleClick(e, 'overseas')}
                onMouseEnter={() => handleEnter('overseas')}
                className={`absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border backdrop-blur-md transition-all duration-300 shadow-lg group ${
                  activeRegion === 'overseas' 
                  ? 'bg-hnt-blue/20 border-hnt-blue text-hnt-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white'
                }`}
             >
               <Globe size={16} className={`md:w-[18px] md:h-[18px] ${activeRegion === 'overseas' ? 'animate-pulse' : ''}`} />
               <span className="text-xs md:text-sm font-bold tracking-wider">Global</span>
             </button>

             {/* Realistic SVG Map of South Korea with Detailed Paths */}
             <svg viewBox="0 0 500 700" className="w-full h-full drop-shadow-2xl filter drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <defs>
                   <filter id="glow">
                      <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                      <feMerge>
                         <feMergeNode in="coloredBlur"/>
                         <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                   </filter>
                   {/* Improved Grid Pattern */}
                   <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                      <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
                   </pattern>
                </defs>

                {/* Background Grid Layer */}
                <rect width="100%" height="100%" fill="url(#grid)" className="pointer-events-none" />

                <style>{`
                  .map-path {
                    stroke: rgba(255,255,255,0.2);
                    stroke-width: 0.6;
                    fill: #1F2833; 
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    cursor: pointer;
                    vector-effect: non-scaling-stroke;
                  }
                  .map-path:hover {
                    fill: #2d3748;
                    stroke: rgba(255,255,255,0.8);
                    stroke-width: 1.2;
                    filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
                    transform: translateY(-2px);
                  }
                  /* Active Styles */
                  .map-path.active {
                    stroke-width: 1.5;
                    filter: url(#glow);
                    transform: scale(1.01) translateY(-3px);
                    z-index: 10;
                  }
                  .map-path.active-blue {
                    fill: rgba(59, 130, 246, 0.5);
                    stroke: #60A5FA;
                  }
                  .map-path.active-orange {
                    fill: rgba(232, 93, 4, 0.5);
                    stroke: #F97316;
                  }
                  /* While locked, diminish non-active elements slightly */
                  .map-container.locked .map-path:not(.active) {
                    opacity: 0.4;
                    filter: blur(0.5px);
                  }
                `}</style>

                <g className={`map-container ${isLocked ? 'locked' : ''}`}>
                    {/* Gyeonggi & Incheon - More detailed coast */}
                    <path 
                      d="M148,130 L155,120 L160,115 L170,116 L180,118 L195,125 L190,140 L200,165 L180,180 L165,190 L160,195 L150,192 L140,190 L125,170 L115,165 L110,160 L105,150 L115,140 L125,138 L130,135 L140,132 Z"
                      className={`map-path ${activeRegion === 'gyeonggi' || activeRegion === 'seoul' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('gyeonggi')}
                      onClick={(e) => handleClick(e, 'gyeonggi')}
                    />
                    
                    {/* Seoul - Detailed Hole */}
                    <path 
                      d="M155,145 L162,143 L170,142 L175,148 L178,155 L170,162 L165,165 L158,162 L152,160 L153,150 Z"
                      className={`map-path ${activeRegion === 'seoul' ? 'active active-blue' : ''}`}
                      style={{ fill: activeRegion === 'seoul' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255,255,255,0.08)' }}
                      onMouseEnter={(e) => { e.stopPropagation(); handleEnter('seoul'); }} 
                      onClick={(e) => handleClick(e, 'seoul')}
                    />

                    {/* Gangwon - Rugged East Coast */}
                    <path 
                      d="M195,125 L180,118 L185,100 L200,80 L220,65 L230,60 L245,80 L260,100 L280,110 L290,140 L300,170 L290,190 L280,200 L260,195 L240,190 L220,180 L200,165 L190,140 Z"
                      className={`map-path ${activeRegion === 'gangwon' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('gangwon')}
                      onClick={(e) => handleClick(e, 'gangwon')}
                    />

                    {/* Chungbuk - Inland detail */}
                    <path 
                      d="M180,180 L200,165 L220,180 L240,190 L245,210 L250,230 L240,245 L230,250 L210,245 L195,240 L185,225 L180,210 L170,200 L160,195 L165,190 Z"
                      className={`map-path ${activeRegion === 'chungbuk' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('chungbuk')}
                      onClick={(e) => handleClick(e, 'chungbuk')}
                    />

                    {/* Chungnam - West Coast Peninsula */}
                    <path 
                      d="M110,160 L115,165 L125,170 L140,190 L150,192 L160,195 L170,200 L180,210 L185,225 L170,250 L155,248 L140,245 L120,240 L100,230 L95,210 L90,190 L95,175 Z"
                      className={`map-path ${activeRegion === 'chungnam' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('chungnam')}
                      onClick={(e) => handleClick(e, 'chungnam')}
                    />

                    {/* Gyeongbuk - Large East Area */}
                    <path 
                      d="M240,190 L260,195 L280,200 L290,190 L300,170 L305,210 L305,250 L310,280 L310,310 L295,315 L280,320 L260,310 L240,300 L235,275 L230,250 L240,245 L250,230 L245,210 Z"
                      className={`map-path ${activeRegion === 'gyeongbuk' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('gyeongbuk')}
                      onClick={(e) => handleClick(e, 'gyeongbuk')}
                    />

                    {/* Jeonbuk - Transition */}
                    <path 
                      d="M140,245 L155,248 L170,250 L195,240 L210,245 L215,260 L200,280 L190,295 L180,310 L160,305 L140,300 L125,290 L110,280 L105,255 L100,230 L120,240 Z"
                      className={`map-path ${activeRegion === 'jeonbuk' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('jeonbuk')}
                      onClick={(e) => handleClick(e, 'jeonbuk')}
                    />

                    {/* Gyeongnam - South Coast Complex */}
                    <path 
                      d="M200,280 L215,260 L230,250 L235,275 L240,300 L260,310 L280,320 L295,315 L310,310 L305,335 L290,360 L265,365 L240,360 L230,345 L220,330 L210,305 Z"
                      className={`map-path ${activeRegion === 'gyeongnam' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('gyeongnam')}
                      onClick={(e) => handleClick(e, 'gyeongnam')}
                    />

                    {/* Jeonnam - High Detail Archipelago Coast */}
                    <path 
                      d="M110,280 L125,290 L140,300 L160,305 L180,310 L190,295 L200,280 L210,305 L220,330 L230,345 L240,360 L220,380 L200,400 L180,415 L160,420 L140,410 L120,400 L90,380 L85,350 L80,320 L95,300 Z"
                      className={`map-path ${activeRegion === 'jeonnam' ? 'active active-orange' : ''}`}
                      onMouseEnter={() => handleEnter('jeonnam')}
                      onClick={(e) => handleClick(e, 'jeonnam')}
                    />

                    {/* Gwangju - Detailed Hole inside Jeonnam */}
                    <path 
                      d="M138,308 L145,306 L152,305 L158,310 L155,318 L150,320 L142,322 L138,315 Z"
                      className={`map-path ${activeRegion === 'gwangju' ? 'active active-blue' : ''}`}
                      style={{ fill: activeRegion === 'gwangju' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255,255,255,0.15)' }}
                      onMouseEnter={(e) => { e.stopPropagation(); handleEnter('gwangju'); }} 
                      onClick={(e) => handleClick(e, 'gwangju')}
                    />

                    {/* Damyang Location Dot */}
                    <circle cx="155" cy="315" r="3" fill="#E85D04" className="animate-pulse pointer-events-none" />

                    {/* Jeju - Oval Island */}
                    <path 
                      d="M120,480 L150,478 L180,475 L200,490 L195,505 L180,510 L150,512 L120,505 L100,490 L110,485 Z"
                      className={`map-path ${activeRegion === 'jeju' ? 'active active-blue' : ''}`}
                      onMouseEnter={() => handleEnter('jeju')}
                      onClick={(e) => handleClick(e, 'jeju')}
                    />
                </g>
             </svg>
             
             {/* Map Labels - Using Percentages for Responsive Positioning */}
             {/* HQ: ~32% Left, ~45.7% Top */}
             <div className="absolute top-[45.7%] left-[32%] text-[9px] md:text-[10px] text-hnt-orange font-bold tracking-wider pointer-events-none whitespace-nowrap bg-black/80 px-1.5 py-0.5 md:px-2 md:py-1 rounded border border-hnt-orange/30 shadow-lg">H.N.T HQ</div>
             
             {/* Seoul: ~31% Left, ~19.3% Top */}
             <div className="absolute top-[19.3%] left-[31%] text-[9px] md:text-[10px] text-white/50 font-bold pointer-events-none drop-shadow-md">Seoul</div>
             
             {/* Interaction Hint Overlay */}
             {isLocked && (
               <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 border border-hnt-blue text-hnt-blue px-3 py-1.5 rounded-full text-xs font-bold animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)] z-30">
                 <Lock size={12} />
                 <span>Selection Locked ({timeLeft}s)</span>
               </div>
             )}
          </div>
        </div>

        {/* Right: Slim Project List Area */}
        <div className="w-full lg:w-1/2 flex flex-col h-[500px] md:h-[700px] pt-4 md:pt-10">
          <div className="mb-4 md:mb-6 pb-2 md:pb-4 border-b border-white/10 flex justify-between items-end">
            <div>
               <div className="flex items-center gap-2 mb-2">
                 <p className="text-hnt-orange text-xs md:text-sm font-bold tracking-[0.2em] uppercase">Selected Region</p>
                 {isLocked ? (
                   <Lock size={12} className="text-hnt-orange animate-bounce md:w-3.5 md:h-3.5" />
                 ) : (
                   <span className="text-white/20 text-[10px] md:text-xs flex items-center gap-1"><Unlock size={10}/> Hover or Click to Lock</span>
                 )}
               </div>
               <h3 className="text-2xl md:text-4xl font-sans font-bold text-white transition-all duration-300">
                 {getRegionName(activeRegion)}
               </h3>
            </div>
             <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm bg-white/5 px-2 py-1 md:px-4 md:py-2 rounded-full border border-white/5">
               <Building2 size={12} className="md:w-[14px] md:h-[14px]" />
               <span>Total <strong className="text-white">{projectData[activeRegion].length}</strong> Projects</span>
             </div>
          </div>

          {/* Table Header */}
          <div className="flex text-xs text-white/40 uppercase tracking-wider px-2 md:px-4 pb-2 md:pb-3 font-medium border-b border-white/5 mb-2">
             <div className="w-20 md:w-24">Type</div>
             <div className="flex-1 px-2 md:px-4">Project Details</div>
             <div className="w-16 md:w-24 text-right">Date</div>
          </div>

          {/* Slim List Items */}
          <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1 pr-1 md:pr-2">
            {projectData[activeRegion].length > 0 ? (
              projectData[activeRegion].map((project, idx) => (
              <div 
                key={idx} 
                className="group flex items-center p-3 md:p-4 bg-white/5 border border-white/5 hover:bg-white/10 hover:border-hnt-blue/30 rounded transition-all duration-300 animate-[fadeIn_0.3s_ease-out_both] cursor-default"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {/* Type Badge */}
                <div className="w-20 md:w-24 shrink-0">
                  <span className="inline-block px-1.5 py-1 text-[9px] md:text-[10px] font-bold text-hnt-blue bg-hnt-blue/10 rounded border border-hnt-blue/20 group-hover:bg-hnt-blue group-hover:text-white transition-colors duration-300 break-words text-center w-full">
                    {project.type}
                  </span>
                </div>

                {/* Title & Location (Client) */}
                <div className="flex-1 px-2 md:px-4 border-l border-white/5 mx-2 min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-white/90 truncate group-hover:text-hnt-orange transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-white/50 mt-1 group-hover:text-white/70 transition-colors">
                    <MapPin size={10} />
                    {/* Display Location/Client info */}
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="w-16 md:w-24 shrink-0 text-right">
                  <span className="text-[10px] md:text-xs font-mono text-white/40 group-hover:text-white transition-colors">
                    {project.year}
                  </span>
                </div>
              </div>
            ))
          ) : (
            // Custom "Coming Soon" Empty State
            <div className="h-full flex flex-col items-center justify-center text-center p-4 md:p-8 border border-dashed border-white/10 rounded-xl bg-white/5 mt-2 md:mt-4">
               <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <Construction size={24} className="text-white/30 md:w-8 md:h-8" />
               </div>
               <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">준비중입니다</h4>
               <p className="text-white/40 text-xs md:text-sm max-w-xs leading-relaxed">
                 현재 <strong className="text-white/60">{getRegionName(activeRegion)}</strong> 지역의 시공 실적 데이터를 정리하고 있습니다.<br/>빠른 시일 내에 업데이트될 예정입니다.
               </p>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMap;