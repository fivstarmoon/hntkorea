import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, type: string) => {
    setMobileMenuOpen(false);

    if (type === 'page') {
      // Let standard Link behavior handle pages
      return;
    }

    if (type === 'hash') {
      e.preventDefault();
      // Extract the id (e.g., "/#about" -> "about")
      const id = href.replace('/#', '');
      
      if (location.pathname !== '/') {
        // If not on home page, go home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navLinks = [
    { name: '회사소개', href: '/#about', type: 'hash' },
    { name: '핵심기술', href: '/#technology', type: 'hash' },
    { name: '시공실적', href: '/projects', type: 'page' },
    { name: '자료실', href: '/#resources', type: 'hash' },
    { name: '고객센터', href: '/#contact', type: 'hash' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-hnt-navy/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            link.type === 'page' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium hover:text-hnt-orange transition-colors duration-300 font-sans tracking-wide ${location.pathname === link.href ? 'text-hnt-orange' : 'text-white/80'}`}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.type)}
                className="text-sm font-medium text-white/80 hover:text-hnt-orange transition-colors duration-300 font-sans tracking-wide cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
          <button className="px-6 py-2 bg-gradient-to-r from-hnt-green to-hnt-green/80 hover:from-hnt-orange hover:to-hnt-orange/90 text-white transition-all duration-300 rounded-sm text-sm font-bold tracking-wider shadow-lg shadow-hnt-green/20 hover:shadow-hnt-orange/20">
            CONTACT US
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-hnt-orange transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hnt-navy/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col space-y-6 animate-fade-in-down shadow-2xl">
          {navLinks.map((link) => (
            link.type === 'page' ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-white/90 hover:text-hnt-orange text-center font-sans"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.type)}
                className="text-lg font-bold text-white/90 hover:text-hnt-orange text-center font-sans cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
          <button className="w-full py-4 bg-hnt-green text-white font-bold tracking-widest text-sm hover:bg-hnt-orange transition-all">
            문의하기
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;