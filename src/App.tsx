import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Homes from "./pages/Homes"; // ← Add this import
import Genesis from "./pages/Genesis";
import Bangalore from "./pages/homes/Bangalore";
import Bhadrachalam from "./pages/homes/Bhadrachalam";
import Raibag from "./pages/homes/Raibag";
import Ambur from "./pages/homes/Ambur";
import ElderCare from "./pages/ElderCare";
import SpecialCare from "./pages/SpecialCare";
import JordanCommunity from "./pages/JordanCommunity";
import ChurchPlanting from "./pages/ChurchPlanting";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/genesis" element={<Genesis />} />
          <Route path="/homes" element={<Homes />} /> {/* ← Add this route */}
          <Route path="/homes/bangalore" element={<Bangalore />} />
          <Route path="/homes/bhadrachalam" element={<Bhadrachalam />} />
          <Route path="/homes/raibag" element={<Raibag />} />
          <Route path="/homes/ambur" element={<Ambur />} />
          <Route path="/elder-care" element={<ElderCare />} />
          <Route path="/special-care" element={<SpecialCare />} />
          <Route path="/jordan-community" element={<JordanCommunity />} />
          <Route path="/church-planting" element={<ChurchPlanting />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;