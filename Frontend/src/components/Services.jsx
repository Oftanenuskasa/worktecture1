import { useState, useEffect } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const services = [
    {
      title: "Workspace Design",
      description: "Custom office layouts optimized for productivity and collaboration. We create spaces that inspire innovation.",
      icon: "🏢",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Interior Planning",
      description: "Thoughtful interior solutions that blend aesthetics with functionality. Every detail matters.",
      icon: "🎨",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Renovation",
      description: "Modernization of existing office spaces with minimal disruption to your business operations.",
      icon: "🔨",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Consultation",
      description: "Expert advice on workplace optimization and space utilization. Let's make your vision reality.",
      icon: "💡",
      color: "yellow",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Sustainable Design",
      description: "Eco-friendly solutions for environmentally conscious businesses. Green building for a better future.",
      icon: "🌱",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination and execution. We handle the details so you don't have to.",
      icon: "📋",
      color: "red",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <div id="services-section" className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive architectural solutions tailored to transform your workspace into an inspiring environment
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl shadow-lg p-8 
                    transform transition-all duration-300 
                    hover:scale-105 hover:shadow-xl
                    animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Service Card Content */}
                  <div className={`w-16 h-16 rounded-lg bg-${service.color}-100 
                    flex items-center justify-center mb-6 
                    transform transition-transform duration-300 
                    ${hoveredIndex === index ? 'scale-110 rotate-12' : ''}`}>
                    <div className="text-4xl">{service.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <button 
                    className={`group relative inline-flex items-center px-6 py-2 text-sm font-medium
                    rounded-lg text-white bg-gradient-to-r ${service.gradient}
                    transition-all duration-300 hover:shadow-lg hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${service.color}-500`}
                  >
                    Learn more
                    <svg 
                      className={`ml-2 w-4 h-4 transform transition-transform duration-300 
                        ${hoveredIndex === index ? 'translate-x-1' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Decorative gradient border */}
                  <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.gradient}
                    rounded-b-xl transform origin-left transition-transform duration-300
                    ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these animations to your global CSS or Tailwind config
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }
`;

export default Services;