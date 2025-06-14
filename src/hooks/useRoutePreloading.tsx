
import { useCallback, useRef } from 'react';

interface PreloadedRoute {
  path: string;
  component: Promise<any>;
}

export const useRoutePreloading = () => {
  const preloadedRoutes = useRef<Map<string, PreloadedRoute>>(new Map());
  const preloadTimeout = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const preloadRoute = useCallback((path: string, delay: number = 300) => {
    // Clear existing timeout for this path
    const existingTimeout = preloadTimeout.current.get(path);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }

    // Don't preload if already preloaded
    if (preloadedRoutes.current.has(path)) {
      return;
    }

    // Set new timeout
    const timeout = setTimeout(async () => {
      try {
        let componentPromise: Promise<any>;

        // Map paths to their lazy-loaded components
        switch (path) {
          case '/services/web-applications':
          case '/web-apps':
            componentPromise = import('../pages/WebAppsPage');
            break;
          case '/services/saas':
          case '/saas':
            componentPromise = import('../pages/SaasPage');
            break;
          case '/services/mobile-apps':
          case '/mobile-apps':
            componentPromise = import('../pages/MobileAppsPage');
            break;
          case '/services/ai-calling':
          case '/ai-calling':
            componentPromise = import('../pages/AiCallingPage');
            break;
          case '/services/ai-automation':
          case '/ai-automation':
            componentPromise = import('../pages/AiAutomationPage');
            break;
          default:
            return;
        }

        preloadedRoutes.current.set(path, {
          path,
          component: componentPromise
        });

        // Actually trigger the import
        await componentPromise;
      } catch (error) {
        console.warn('Failed to preload route:', path, error);
      }
    }, delay);

    preloadTimeout.current.set(path, timeout);
  }, []);

  const cancelPreload = useCallback((path: string) => {
    const timeout = preloadTimeout.current.get(path);
    if (timeout) {
      clearTimeout(timeout);
      preloadTimeout.current.delete(path);
    }
  }, []);

  const cleanupPreloads = useCallback(() => {
    preloadTimeout.current.forEach(timeout => clearTimeout(timeout));
    preloadTimeout.current.clear();
  }, []);

  return {
    preloadRoute,
    cancelPreload,
    cleanupPreloads
  };
};
