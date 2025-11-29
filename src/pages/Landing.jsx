import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFE9E3] px-4 py-12">
      {/* Logo Section - Full Width */}
      <div className="mb-8 md:mb-12 w-full">
        <img 
          src="/main logo.jpeg" 
          alt="Empress Consultants Logo" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mission Text Section */}
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
        <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed">
        Compassionate, evidence - based Applied Behavior Analysis + Educational services that transform potential into progress
        </p>
      </div>

      {/* Button to Homepage */}
      <div className="mt-4">
        <Link 
          to="/home" 
          className="btn-primary inline-block text-lg px-8 py-4 rounded-lg"
        >
          Enter Homepage
        </Link>
      </div>
    </div>
  );
}

