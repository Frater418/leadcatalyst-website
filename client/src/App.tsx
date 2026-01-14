import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Insurance Vertical Pages
import InsuranceHome from "./pages/insurance/index";
import ForCarriers from "./pages/insurance/for-carriers";
import ForAgents from "./pages/insurance/for-agents";
import Platform from "./pages/insurance/platform";
import LeadQuality from "./pages/insurance/lead-quality";
import Pricing from "./pages/insurance/pricing";
import HowItWorks from "./pages/insurance/how-it-works";
import Compliance from "./pages/insurance/compliance";
import CaseStudies from "./pages/insurance/case-studies";
import FAQ from "./pages/insurance/faq";
import Contact from "./pages/insurance/contact";

function Router() {
  return (
    <Switch>
      {/* Main Site Routes */}
      <Route path={"/"} component={Home} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={TermsOfService} />
      <Route path={"/cookies"} component={CookiePolicy} />

      {/* Insurance Vertical Routes */}
      <Route path={"/insurance"} component={InsuranceHome} />
      <Route path={"/insurance/for-carriers"} component={ForCarriers} />
      <Route path={"/insurance/for-agents"} component={ForAgents} />
      <Route path={"/insurance/platform"} component={Platform} />
      <Route path={"/insurance/lead-quality"} component={LeadQuality} />
      <Route path={"/insurance/pricing"} component={Pricing} />
      <Route path={"/insurance/how-it-works"} component={HowItWorks} />
      <Route path={"/insurance/compliance"} component={Compliance} />
      <Route path={"/insurance/case-studies"} component={CaseStudies} />
      <Route path={"/insurance/faq"} component={FAQ} />
      <Route path={"/insurance/contact"} component={Contact} />

      {/* Catch-all 404 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
