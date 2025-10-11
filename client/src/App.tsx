import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Home from "@/pages/home";
import Eyebrows from "@/pages/eyebrows";
import Lips from "@/pages/lips";
import Eyeliner from "@/pages/eyeliner";
import NotFound from "@/pages/not-found";
import { withLocalizedLanguage } from "@/pages/localized-page";

const LocalizedHome = withLocalizedLanguage(Home);
const LocalizedEyebrows = withLocalizedLanguage(Eyebrows);
const LocalizedLips = withLocalizedLanguage(Lips);
const LocalizedEyeliner = withLocalizedLanguage(Eyeliner);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/magerovska_website" component={Home} />
      <Route path="/magerovska_website/" component={Home} />
      <Route path="/services/eyebrows" component={Eyebrows} />
      <Route path="/services/lips" component={Lips} />
      <Route path="/services/eyeliner" component={Eyeliner} />
      <Route path="/:lang/services/eyebrows" component={LocalizedEyebrows} />
      <Route path="/:lang/services/lips" component={LocalizedLips} />
      <Route path="/:lang/services/eyeliner" component={LocalizedEyeliner} />
      <Route path="/:lang" component={LocalizedHome} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
