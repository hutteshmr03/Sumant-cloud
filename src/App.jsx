import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Products from "./components/Products";
import SolutionsGrid from "./components/SolutionsGrid";
import Approach from "./components/Approach";
import AboutPage from "./components/AboutPage";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CMMS from "./components/CMMS";
import PEM from "./components/PEM";
import EP2P from "./components/EP2P";
import CMS from "./components/CMS";
import WMS from "./components/WMS";
import EDIMS from "./components/EDIMS";
import Contact from "./components/Contact";
import AIMLHiringPage from "./components/AIMLHiringPage";
import CustomSoftwarePage from "./components/CustomSoftwarePage";
import ITConsultingPage from "./components/ITConsultingPage";
import SaaSPage from "./components/SaaSPage";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "");

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/cmms") {
    return <CMMS />;
  }

  if (pathname === "/pem") {
    return <PEM />;
  }

  if (pathname === "/ep2p") {
    return <EP2P />;
  }

  if (pathname === "/cms") {
    return <CMS />;
  }

  if (pathname === "/wms") {
    return <WMS />;
  }

  if (pathname === "/e-dims" || pathname === "/edims") {
    return <EDIMS />;
  }

  if (pathname === "/contact") {
    return <Contact />;
  }

  if (pathname === "/ai-ml-hiring") {
    return <AIMLHiringPage />;
  }

  if (pathname === "/custom-software") {
    return <CustomSoftwarePage />;
  }

  if (pathname === "/it-consulting") {
    return <ITConsultingPage />;
  }

  if (pathname === "/saas") {
    return <SaaSPage />;
  }

  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <SolutionsGrid />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
