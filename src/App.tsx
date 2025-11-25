import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import { HomePage, MarketsPage, PortfolioPage, FavoritesPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>

        <Footer
          socialLinks={{
            gitbook: "https://docs.strata.com",
            twitter: "https://twitter.com/strata",
            discord: "https://discord.gg/strata",
            github: "https://github.com/strata",
            mirror: "https://mirror.xyz/strata",
          }}
          termsOfServiceUrl="/terms"
          privacyPolicyUrl="/privacy"
        />

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
