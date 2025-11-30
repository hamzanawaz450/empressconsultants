import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#EFE9E3] text-black border-t border-black/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-2 pr-4">
            <div className="flex items-start space-x-4">
              <img 
                src="/main logo.jpeg" 
                alt="Empress Consultants Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
              />
              <div className="w-px bg-black/20" style={{ minHeight: '100%', alignSelf: 'stretch' }}></div>
              <div className="flex-1 min-w-0">
                <p className="text-black font-semibold text-sm sm:text-base mb-1">Maria Torres, BCBA, LBA-NY</p>
                <p className="text-black/70 font-semibold text-xs sm:text-sm mb-2">Founder & CEO, Empress-Consultants, LLC</p>
                <p className="text-black text-xs sm:text-sm mb-2 break-words">(646) 769-0706 | info.empressconsultants@gmail.com</p>
                <p className="text-black/70 text-xs sm:text-sm italic break-words">Evidence-Based ABA & Related Services for Children Across NEW YORK</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pl-0 md:pl-4">
            <h3 className="font-semibold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link to="/services" className="hover:text-[#D4AF37] transition">Services</Link></li>
              <li><Link to="/schools" className="hover:text-[#D4AF37] transition">For Schools</Link></li>
              <li><Link to="/resources" className="hover:text-[#D4AF37] transition">Resources</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pl-0 md:pl-4">
            <h3 className="font-semibold mb-4 text-black">Contact</h3>
            <ul className="space-y-2 text-sm text-black/70">
              <li>Phone: (646) 769-0706</li>
              <li>Email: info@empress-consultants.com</li>
              <li>New York, NY</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="pl-0 md:pl-4">
            <h3 className="font-semibold mb-4 text-black">Legal</h3>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link to="/compliance" className="hover:text-[#D4AF37] transition">Compliance & Privacy</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-[#D4AF37] transition">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-black/70 px-4">
          <p>&copy; {new Date().getFullYear()} Empress-Consultants, LLC. All rights reserved.</p>
          <p className="mt-2">BCBA/LBA-NY, DOE vendor</p>
        </div>
      </div>
    </footer>
  );
}

