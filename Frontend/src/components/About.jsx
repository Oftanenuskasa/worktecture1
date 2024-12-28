const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '300+' },
    { label: 'Team Members', value: '50+' }
  ];

  const teamMembers = [
    {
      name: 'Amanuel',
      role: 'Chief Architect',
      description: 'With over 20 years of experience in architectural design, Amanuel leads our creative vision.',
      image: '/images/Amanuel.jpg'
    },
    {
      name: 'Alemayehu',
      role: 'Design Director',
      description: 'Alemayehu brings innovative solutions to every project with his expertise in sustainable design.',
      image: '/images/Alemayehu.jpg'
    },
    {
      name: 'Yabsira',
      role: 'Project Manager',
      description: 'Yabsira ensures seamless execution of projects with his detail-oriented approach.',
      image: '/images/yabsira.jpg'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            About Worktecture
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl text-gray-500">
            Building the future of workspaces with innovative design and sustainable solutions
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Text Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                At Worktecture, we believe that thoughtfully designed workspaces can transform 
                the way people work and collaborate. Our team of experienced architects and 
                designers is passionate about creating environments that inspire creativity, 
                enhance productivity, and promote well-being.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 mt-4">
                Founded in 2008, we&apos;ve grown from a small design studio to a comprehensive 
                architectural solutions provider. Our approach combines innovative design thinking 
                with practical solutions, ensuring that each project we undertake perfectly 
                aligns with our clients&apos; vision and requirements.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg p-4 md:p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <article 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative pb-[100%] overflow-hidden"> {/* 1:1 Aspect ratio */}
                  {/* Circular Image */}
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-full transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    style={{
                      objectPosition: '50% 20%' // Adjust to focus on faces
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm md:text-base text-blue-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{member.description}</p>
                  <button
                    onClick={scrollToTop}
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
                  >
                    Learn More
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
