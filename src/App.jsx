import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Approach from "./components/Approach";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import CMMS from "./components/CMMS";
import PEM from "./components/PEM";
import EP2P from "./components/EP2P";
import CMS from "./components/CMS";
import WMS from "./components/WMS";
import UIUXDesign from "./components/UIUXDesign";
import WebsiteDesign from "./components/WebsiteDesign";
import Contact from "./components/Contact";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "");

  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (["/software-development", "/mobile-app-development", "/ecommerce-solutions", "/automation"].includes(pathname)) {
    return <SoftwareDevelopment />;
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

  if (pathname === "/ui-ux-design") {
    return <UIUXDesign />;
  }

  if (pathname === "/website-design") {
    return <WebsiteDesign />;
  }

  if (pathname === "/contact") {
    return <Contact />;
  }

  return (
    <div className="font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Approach />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
