import { useState, useEffect } from 'react';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('why-us-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const reasons = [
    {
      title: "Expert Team",
      description: "Our team consists of experienced architects and designers with proven track records.",
      icon: "👥",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      iconBg: "bg-blue-100"
    },
    {
      title: "Innovation",
      description: "We implement cutting-edge design solutions and state-of-the-art technologies.",
      icon: "💡",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100",
      iconBg: "bg-yellow-100"
    },
    {
      title: "Quality",
      description: "We maintain the highest standards in every project, ensuring excellence.",
      icon: "⭐",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      iconBg: "bg-purple-100"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly solutions for a better future and sustainable development.",
      icon: "🌱",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <div id="why-us-section" className="relative py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 right-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase
              animate-fade-in">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl
              animate-fade-in delay-100">
              A better way to build your workspace
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto animate-fade-in delay-200">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`${reason.bgColor} p-6 rounded-xl shadow-lg transform transition-all duration-300
                    hover:scale-105 hover:shadow-xl ${reason.hoverColor}
                    animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`${reason.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6
                    transform transition-transform duration-300 hover:rotate-12`}>
                    <div className="text-4xl">{reason.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed">{reason.description}</p>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300"></div>
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
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }

  .animate-fade-in-up {
    opacity: 0;
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .delay-100 {
    animation-delay: 100ms;
  }

  .delay-200 {
    animation-delay: 200ms;
  }
`;

export default WhyUs;