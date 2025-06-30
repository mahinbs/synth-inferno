
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import WebAppsPage from "./pages/WebAppsPage";
import SaasPage from "./pages/SaasPage";
import MobileAppsPage from "./pages/MobileAppsPage";
import SalesForcePage from "./pages/SalesForcePage";
import AiCallingPage from "./pages/AiCallingPage";
import AiAutomationPage from "./pages/AiAutomationPage";
import CaseStudy from "./pages/CaseStudy";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";
import ReviewsPage from "./pages/ReviewsPage";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/AdminDashboard";
import PortfolioForm from "./pages/admin/PortfolioForm";
import PortfolioList from "./pages/admin/PortfolioList";
import CaseStudyList from "./pages/admin/CaseStudyList";
import BlogForm from "./pages/admin/BlogForm";
import BlogList from "./pages/admin/BlogList";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/web-apps" element={<WebAppsPage />} />
            <Route path="/saas" element={<SaasPage />} />
            <Route path="/mobile-apps" element={<MobileAppsPage />} />
            <Route path="/sales-force" element={<SalesForcePage />} />
            <Route path="/ai-calling" element={<AiCallingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/case-study/:projectId" element={<CaseStudy />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio" element={
              <ProtectedRoute>
                <AdminLayout>
                  <PortfolioList />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio/new" element={
              <ProtectedRoute>
                <AdminLayout>
                  <PortfolioForm />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/portfolio/edit/:id" element={
              <ProtectedRoute>
                <AdminLayout>
                  <PortfolioForm />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/case-studies" element={
              <ProtectedRoute>
                <AdminLayout>
                  <CaseStudyList />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs" element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogList />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs/new" element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogForm />
                </AdminLayout>
              </ProtectedRoute>
            } />
            <Route path="/admin/blogs/edit/:id" element={
              <ProtectedRoute>
                <AdminLayout>
                  <BlogForm />
                </AdminLayout>
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
