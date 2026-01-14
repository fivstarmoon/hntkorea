import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Printer, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 bg-black/95 backdrop-blur-xl border-t border-white/10 pt-20 pb-10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo />
            <p className="text-white/60 max-w-sm font-light leading-relaxed mt-4">
              (주)H.N.T는 인간과 자연의 조화를 우선으로 하는 친환경 건설 기업입니다. 
              끊임없는 기술 혁신으로 더 안전하고 가치 있는 공간을 창조합니다.
            </p>
          </div>
          
          <div className="space-y-6 col-span-1 md:col-span-2">
            <h4 className="text-white font-montserrat uppercase tracking-widest text-sm font-bold border-b border-white/10 pb-2 w-fit">Contact Info</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-hnt-orange shrink-0 mt-0.5" />
                <span>전라남도 담양군 담양읍 에코산단5로 90</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hnt-green shrink-0" />
                <span>061-383-7477</span>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-hnt-blue shrink-0" />
                <span>061-383-7478</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <a href="mailto:hntkorea@hanmail.net" className="hover:text-hnt-orange transition-colors">hntkorea@hanmail.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} H.N.T Construction Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">사이트맵</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;