import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Services from './pages/Services';
import ABATherapy from './pages/ABATherapy';
import ParentTraining from './pages/ParentTraining';
import Supervision from './pages/Supervision';
import RelatedServices from './pages/RelatedServices';
import ImpartialHearing from './pages/ImpartialHearing';
import ForSchools from './pages/ForSchools';
import ForParents from './pages/ForParents';
import LegalAdvocacy from './pages/LegalAdvocacy';
import About from './pages/About';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Compliance from './pages/Compliance';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/aba-therapy" element={<ABATherapy />} />
            <Route path="/services/parent-training" element={<ParentTraining />} />
            <Route path="/services/supervision" element={<Supervision />} />
            <Route path="/services/related-services" element={<RelatedServices />} />
            <Route path="/services/impartial-hearing" element={<ImpartialHearing />} />
            <Route path="/schools" element={<ForSchools />} />
            <Route path="/parents" element={<ForParents />} />
            <Route path="/legal" element={<LegalAdvocacy />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compliance" element={<Compliance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
