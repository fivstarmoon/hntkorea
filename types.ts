export interface UnicornStudioGlobal {
  isInitialized: boolean;
  init: () => void;
}

declare global {
  interface Window {
    UnicornStudio: UnicornStudioGlobal;
  }
}