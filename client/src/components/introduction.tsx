import { ArrowRight } from "lucide-react";

export default function Introduction() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="introduction" className="pt-20 pb-16 bg-gradient-to-br from-theme-neutral to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-theme-secondary mb-6 leading-tight">
              Hello, I'm <span className="text-theme-primary">Dedrick</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Turning ideas into reality! I'm a Technical Solution Designer skilled in architecting and delivering complex systems to meet business (or personal) goals. I'm adept at leading ideation, translating requirements into actionable designs, and bridging the gap between technical teams, product owners, and executives through clear communication and collaboration. Experienced in guiding products from concept to deployment (full SDLC), shaping roadmaps, and ensuring alignment with business objectives to deliver elegant, sustainable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-primary hover:bg-blue-700 transition-colors duration-200"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a 
                href="https://www.linkedin.com/in/dedricksiddall/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a 
                href="https://linkedin.com/in/dedricksiddall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-theme-primary transition-colors duration-200"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com/dedricksiddall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-theme-primary transition-colors duration-200"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.behance.net/dedricksiddall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-theme-primary transition-colors duration-200"
              >
                <i className="fab fa-behance text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQH3GSjlk9iNTQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718273870343?e=1757548800&v=beta&t=mddgqFt5L-v6ZTd5sO-pOxs_3dOiwBhAV4NOqGwMFnc" 
              alt="Dedrick Siddall professional headshot" 
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
