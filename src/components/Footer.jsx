import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] text-black border-t border-black/10 mt-0">
      <div className="container-custom py-12">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-12 items-start">
          
          {/* Column 1: Founder */}
          <div className="flex items-start gap-4 col-span-2 md:col-span-1">
            <img
              src="/empress-favicon.jpeg"
              alt="Empress Consultants tree logo"
              className="w-20 h-20 object-contain flex-shrink-0"
            />
            <div>
              <p className="font-semibold text-lg">
                Maria Torres, BCBA, LBA-NY
              </p>
              <p className="text-sm mt-1">
                Founder &amp; CEO, Empress-Consultants, LLC
              </p>
              <p className="text-sm mt-2">
                (646) 769-0706 &nbsp;|&nbsp; info@empressconsultants.com
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-[#D4AF37]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/for-schools" className="hover:text-[#D4AF37]">
                  For Schools
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#D4AF37]">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Phone: (646) 769-0706</li>
              <li>Email: info@empressconsultants.com</li>
              <li>New York, NY</li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/compliance" className="hover:text-[#D4AF37]">
                  Compliance &amp; Privacy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#D4AF37]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom tagline + copyright */}
        <div className="mt-10 border-t border-black/10 pt-6 text-center leading-relaxed">
          <p className="italic text-sm md:text-base mb-2">
            Evidence-based ABA &amp; related services for children throughout New York.
          </p>
          <p className="text-xs">
            © 2025 Empress-Consultants, LLC. All rights reserved.
          </p>
          <p className="text-xs">
            BCBA/LBA-NY, DOE vendor
          </p>
        </div>
      </div>
    </footer>
  );
}
