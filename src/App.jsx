import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Products from "./components/Products";
import Industries from "./components/Industries";
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
import LMS from "./components/LMS";
import Contact from "./components/Contact";
import AIMLHiringPage from "./components/AIMLHiringPage";
import CustomSoftwarePage from "./components/CustomSoftwarePage";
import ITConsultingPage from "./components/ITConsultingPage";
import SaaSPage from "./components/SaaSPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname.replace(/\/$/, ""));
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.replace(/\/$/, ""));
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

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
  }, [currentPath, currentHash]);

  if (currentPath === "/about" || currentHash === "#about") {
    return <AboutPage />;
  }

  if (currentPath === "/cmms") {
    return <CMMS />;
  }

  if (currentPath === "/pem") {
    return <PEM />;
  }

  if (currentPath === "/ep2p") {
    return <EP2P />;
  }

  if (currentPath === "/cms") {
    return <CMS />;
  }

  if (currentPath === "/wms") {
    return <WMS />;
  }

  if (currentPath === "/e-dims" || currentPath === "/edims" || currentPath === "/e-dms" || currentPath === "/edms") {
    return <EDIMS />;
  }

  if (currentPath === "/lms") {
    return <LMS />;
  }

  if (currentPath === "/contact") {
    return <Contact />;
  }

  if (currentPath === "/ai-ml-hiring") {
    return <AIMLHiringPage />;
  }

  if (currentPath === "/custom-software") {
    return <CustomSoftwarePage />;
  }

  if (currentPath === "/it-consulting") {
    return <ITConsultingPage />;
  }

  if (currentPath === "/saas") {
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
        <Industries />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
