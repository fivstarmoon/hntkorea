import React, { useEffect } from 'react';
import '../types';

const UnicornBackground: React.FC = () => {
  useEffect(() => {
    // Unicorn Studio Project ID from the provided snippet
    const scriptSrc = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";

    const initUnicorn = () => {
      if (window.UnicornStudio) {
         window.UnicornStudio.init();
         window.UnicornStudio.isInitialized = true;
      }
    };

    // 1. Initialize window object if needed
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false, init: () => {} };
    }

    // 2. Check if script is already present to avoid duplicates
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.onload = () => {
         // Run init only after script load
         if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            initUnicorn();
         }
      };
      (document.head || document.body).appendChild(script);
    } else {
      // If script exists, force re-init for the new DOM elements (important for React navigation)
      // Slight delay ensures the div is fully rendered in the DOM before Unicorn looks for it
      setTimeout(initUnicorn, 100);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#0B0C10] overflow-hidden pointer-events-none">
      {/* 
        Unicorn Studio Target Element 
        - data-us-project: Links to your specific Unicorn Studio project
        - style: Set to 100% width/height to serve as a responsive background (overriding fixed px values)
      */}
      <div 
        data-us-project="LTh061bS1G6zkDaLpLqr" 
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
      ></div>

      {/* 
        Overlay
        Adds a subtle dark layer to ensure text on top remains readable 
        regardless of the brightness of the Unicorn Studio effect.
      */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
    </div>
  );
};

export default UnicornBackground;