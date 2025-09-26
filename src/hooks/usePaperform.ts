import { useEffect } from 'react';

/**
 * Custom hook to load Paperform embed script
 * Ensures the script is loaded only once across the application
 */
export const usePaperform = () => {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://paperform.co/__embed.min.js"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup is optional since Paperform script is typically loaded once
      // and reused across the application
    };
  }, []);
};
