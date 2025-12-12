import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import ForSchools from "./pages/ForSchools";
import Services from "./pages/Services";
import ABATherapy from "./pages/ABATherapy";
import Supervision from "./pages/Supervision";
import ParentTraining from "./pages/ParentTraining";
import RelatedServices from "./pages/RelatedServices";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Compliance from "./pages/Compliance";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/aba-therapy" element={<ABATherapy />} />
        <Route path="/services/supervision" element={<Supervision />} />
        <Route path="/services/parent-training" element={<ParentTraining />} />
        <Route path="/services/related-services" element={<RelatedServices />} />
        <Route path="/for-schools" element={<ForSchools />} />
        <Route path="/resources" element={<Resources />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
