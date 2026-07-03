import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Pages
import Home from '@/pages/Home';
import Features from '@/pages/Features';
import AIAgents from '@/pages/AIAgents';
import Solutions from '@/pages/Solutions';
import Pricing from '@/pages/Pricing';
import Integrations from '@/pages/Integrations';
import CaseStudies from '@/pages/CaseStudies';
import Blog from '@/pages/Blog';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Careers from '@/pages/Careers';
import Docs from '@/pages/Docs';
import BookDemo from '@/pages/BookDemo';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/ai-agents" component={AIAgents} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/integrations" component={Integrations} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/careers" component={Careers} />
          <Route path="/docs" component={Docs} />
          <Route path="/book-demo" component={BookDemo} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="dark bg-background text-foreground min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
