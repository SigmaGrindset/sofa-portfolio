import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  ScrollRestoration,
} from '@tanstack/react-router';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { AuroraBackground } from '@/components/layout/AuroraBackground';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { LanguageProvider } from '@/hooks/useLanguage';
import { Homepage } from '@/pages/Homepage/Homepage';
import { ProjectDetail } from '@/pages/ProjectDetail/ProjectDetail';
import { NotFound } from '@/pages/NotFound/NotFound';

const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
  component: () => (
    <LanguageProvider>
      <SmoothScroll />
      <AuroraBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </LanguageProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Homepage,
});

const projectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$projectId',
  component: ProjectDetail,
});

const routeTree = rootRoute.addChildren([indexRoute, projectRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
