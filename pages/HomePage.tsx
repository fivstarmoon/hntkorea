import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BrochureHistory from '../components/BrochureHistory';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <BrochureHistory />
      
      {/* Quote Section */}
      <section className="py-24 px-6 relative z-10 flex items-center justify-center bg-black/20 backdrop-blur-sm">
         <div className="text-center max-w-4xl">
           <p className="text-xl md:text-3xl font-serif italic text-white/80 leading-relaxed">
             "Building the Future with Human, Nature, and Technology."
           </p>
         </div>
      </section>
    </>
  );
};

export default HomePage;