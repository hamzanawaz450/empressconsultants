import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ForSchools from './pages/ForSchools';
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
            <Route path="/services" element={<Services />} />
            <Route path="/schools" element={<ForSchools />} />
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
