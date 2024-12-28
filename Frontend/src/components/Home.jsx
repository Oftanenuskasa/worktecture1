import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="sm:text-center lg:text-left flex items-center">
                <div className="flex-1">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block animate-fade-in-up">Welcome to</span>
                    <span className="block text-blue-600 animate-fade-in-up delay-200 bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
                      Worktecture
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up delay-300">
                    Transform your workspace with our innovative architectural solutions. 
                    We create modern, efficient, and inspiring work environments.
                  </p>

                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-up delay-400">
                    <div className="rounded-md shadow transform transition-all duration-300 hover:scale-105">
                      <a
                        href="#services"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                        rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                        transition-all duration-300 md:py-4 md:text-lg md:px-10 shadow-md hover:shadow-xl"
                      >
                        Get Started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 transform transition-all duration-300 hover:scale-105">
                      <a
                        href="#contact"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                        rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-300 md:py-4 md:text-lg md:px-10 
                        shadow-md hover:shadow-xl"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>

                {/* Rotating Circle with Single Text "Worktecture" */}
                <div className="w-64 h-64 bg-blue-300 rounded-full flex justify-center items-center ml-8 relative overflow-hidden">
                  <div className="absolute w-full h-full flex items-center justify-center animate-spin-slow">
                    {/* Rotating "Worktecture" text */}
                    <div className="absolute text-white font-bold text-xl transform translate-x-1/2 translate-y-1/2 rotate-0">
                      Worktecture
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Decorative blob shapes */}
      <div className="absolute top-0 right-0 -z-10 transform translate-x-1/2 -translate-y-1/4">
        <div className="animate-blob-slow opacity-70 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/2 translate-y-1/4">
        <div className="animate-blob-slow animation-delay-2000 opacity-70 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default Home;
