import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "ABA Therapy",
      description: "Functional assessments, individualized program design, BCBA supervision, and continuous data review across home, school, and community settings.",
      image: "/iStock-1151510733.jpg",
      link: "/services/aba-therapy"
    },
    {
      title: "Parent Training",
      description: "Coaching and digital modules that teach reinforcement strategies, structure, and consistency within everyday routines.",
      image: "/iStock-1282884529.jpg",
      link: "/services/parent-training"
    },
    {
      title: "Supervision & Professional Development",
      description: "Comprehensive BCBA/RBT supervision, competency assessment, and ethics guidance to ensure clinical quality.",
      image: "/iStock-1332728408.jpg",
      link: "/services/supervision"
    },
    {
      title: "Related Services",
      description: "Integrated collaboration among Speech, OT, PT, and SETSS professionals to support academic and behavioral progress.",
      image: "/iStock-1357352061.jpg",
      link: "/services/related-services"
    }
  ];

  const ageGroups = [
    {
      range: "Early Learners (2-5)",
      focus: "Communication, play skills, and readiness for preschool environments"
    },
    {
      range: "Elementary Students (6-10)",
      focus: "Behavior regulation, academic independence, and social interaction"
    },
    {
      range: "Middle & High School Students (11-18)",
      focus: "Executive functioning, adaptive skills, and emotional self-management"
    },
    {
      range: "Young Adults (18-21)",
      focus: "Vocational readiness, community participation, and independent living skills"
    }
  ];

  const stakeholders = [
    {
      title: "Parents & Caregivers",
      description: "Home-based ABA and parent training that build communication skills, daily routines, and positive behavior supports."
    },
    {
      title: "Schools & Educators",
      description: "In-class coaching and consultation to integrate behavioral supports within instruction and align with IEP goals."
    },
    {
      title: "Attorneys & Advocates",
      description: "Implementation of FOFD and IHO orders, expert testimony, and documentation for legal compliance."
    },
    {
      title: "Clinicians & Providers",
      description: "Collaborative planning with speech, occupational, and physical therapists to ensure cohesive service delivery."
    },
    {
      title: "Community Organizations",
      description: "Consultation and training to extend inclusive behavioral support into community settings."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
        <div className="container-custom">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 px-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto px-4">
            Our multidisciplinary team provides Applied Behavior Analysis and related therapies designed for each child's environment—home, school, or community.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Core Services</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary-600 font-semibold hover:text-primary-700 text-sm sm:text-base">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Age Groups We Serve</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-600 mb-2">{group.range}</h3>
                <p className="text-sm sm:text-base text-gray-700">{group.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Stakeholders We Serve</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {stakeholders.map((stakeholder, index) => (
              <div key={index} className="bg-primary-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{stakeholder.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{stakeholder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-primary-100 px-4">
            Contact us to learn more about our services
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100 inline-block">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

