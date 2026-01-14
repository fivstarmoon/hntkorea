import React, { useState, useEffect } from 'react';
import { X, Construction } from 'lucide-react';

const UnderConstructionPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already closed the popup in this session
    const hasClosed = sessionStorage.getItem('popup-closed');
    if (!hasClosed) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Remember that the user closed it for this session
    sessionStorage.setItem('popup-closed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-[#121212] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-hnt-orange/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors p-1"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center space-y-5 relative z-10">
          <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-hnt-orange shadow-[0_0_15px_rgba(232,93,4,0.2)]">
            <Construction size={28} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">홈페이지 업데이트 안내</h3>
            <p className="text-white/60 text-sm leading-relaxed font-light break-keep">
              현재 더 나은 서비스 제공을 위해<br/>
              홈페이지 리뉴얼 작업이 진행 중입니다.<br/>
              <span className="text-hnt-orange/80">메뉴 및 콘텐츠가 수시로 변경될 수 있으니</span><br/>
              이용에 참고 부탁드립니다.
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3 bg-white text-black hover:bg-hnt-orange hover:text-white font-bold rounded-lg transition-all duration-300 text-sm tracking-wide"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPopup;