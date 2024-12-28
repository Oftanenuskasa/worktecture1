import { HiOutlineHome, HiOutlineOfficeBuilding, HiOutlineLightBulb, HiOutlineCode, HiOutlineColorSwatch, HiOutlineGlobeAlt } from 'react-icons/hi';

const Popular = () => {
  const projects = [
    // Software Services
    {
      category: "Software Services",
      items: [
        {
          icon: <HiOutlineCode className="text-5xl" />,
          title: "Website Building",
          description: "Custom websites designed for your brand's needs, ensuring a user-friendly experience.",
        },
        {
          icon: <HiOutlineCode className="text-5xl" />,
          title: "Front End Development",
          description: "Creating responsive and interactive interfaces for websites using modern technologies.",
        },
        {
          icon: <HiOutlineCode className="text-5xl" />,
          title: "Back End Development",
          description: "Server-side development for scalable, high-performance web applications.",
        },
      ],
    },

    // Graphics Design
    {
      category: "Graphics Design",
      items: [
        {
          icon: <HiOutlineColorSwatch className="text-5xl" />,
          title: "Branding",
          description: "Designing a complete visual identity for your brand, including colors, typography, and more.",
        },
        {
          icon: <HiOutlineColorSwatch className="text-5xl" />,
          title: "Logo Design",
          description: "Unique and memorable logo design that represents your brand and message.",
        },
        {
          icon: <HiOutlineColorSwatch className="text-5xl" />,
          title: "Company Profile",
          description: "Designing professional company profiles that highlight your business, values, and services.",
        },
      ],
    },

    // Interior Design
    {
      category: "Interior Design",
      items: [
        {
          icon: <HiOutlineOfficeBuilding className="text-5xl" />,
          title: "Facade Design",
          description: "Designing the exterior of your building to create a lasting impression.",
        },
        {
          icon: <HiOutlineOfficeBuilding className="text-5xl" />,
          title: "Interior Design",
          description: "Creative interior design solutions that enhance functionality and aesthetics.",
        },
        {
          icon: <HiOutlineLightBulb className="text-5xl" />, // New service
          title: "Lighting Design",
          description: "Innovative lighting designs that highlight the best features of your space.",
        },
      ],
    },

    // Landscape Services
    {
      category: "Landscape Services",
      items: [
        {
          icon: <HiOutlineGlobeAlt className="text-5xl" />,
          title: "City Landscape",
          description: "Designing public spaces, parks, and urban areas to create a vibrant environment.",
        },
        {
          icon: <HiOutlineGlobeAlt className="text-5xl" />,
          title: "Compound Landscape",
          description: "Transforming private properties and compounds into beautiful, functional outdoor spaces.",
        },
        {
          icon: <HiOutlineGlobeAlt className="text-5xl" />, // New service
          title: "Garden Design",
          description: "Custom garden designs to enhance your outdoor living experience.",
        },
      ],
    },

    // Visualization Services
    {
      category: "Visualization Services",
      items: [
        {
          icon: <HiOutlineHome className="text-5xl" />,
          title: "3D Rendering",
          description: "Creating detailed 3D visualizations for architectural projects.",
        },
        {
          icon: <HiOutlineHome className="text-5xl" />,
          title: "Animation",
          description: "Bringing your designs to life through realistic 3D animation and virtual walkthroughs.",
        },
        {
          icon: <HiOutlineHome className="text-5xl" />, // New service
          title: "Virtual Tours",
          description: "Immersive virtual tours of your design that let you explore spaces remotely.",
        },
      ],
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Popular Services
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our wide range of services in architecture, design, web development, and visualization.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <div className="space-y-8">
            {projects.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
                  {category.items.map((project, index) => (
                    <article
                      key={index}
                      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-100 overflow-hidden transform hover:scale-105"
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 group-hover:opacity-90 transition-opacity duration-300">
                        <div className="w-full h-full flex justify-center items-center bg-gray-200">
                          {project.icon}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <h4 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-200">
                          {project.title}
                        </h4>
                        <p className="mt-2 text-sm md:text-base text-gray-500 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
