
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/hero-image.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cafe-white">
      {/* Background design elements */}
      <div className="absolute top-20 left-0 right-0 bottom-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cafe-babyBlue rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cafe-lightTurquoise rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cafe-sand rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cafe-lightTurquoise/30 backdrop-blur-sm border border-cafe-turquoise/20">
              <p className="text-sm font-medium text-cafe-turquoise">Authentic Greek Flavors</p>
            </div>
            <h1 className="heading-xl mb-6 text-foreground">
              Experience the Taste of 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cafe-turquoise to-cafe-lightTurquoise">
                Mediterranean Tradition
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Delicious homemade Greek cuisine, artisanal coffee, and delightful breakfast options in a warm, inviting atmosphere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/menu" 
                className="px-8 py-3 rounded-lg bg-cafe-turquoise text-white font-medium transition-all hover:shadow-lg hover:shadow-cafe-turquoise/20 hover:-translate-y-0.5"
              >
                View Our Menu
              </Link>
              <a 
                href="#about" 
                className="px-8 py-3 rounded-lg bg-transparent border border-cafe-sand text-foreground font-medium transition-all hover:bg-cafe-sand/10"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-cafe-turquoise/30 to-transparent z-10"></div>
              <img 
                src={heroImage} 
                alt="Greek cuisine" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 -left-5 glass-card p-4 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 z-20 max-w-[200px]">
              <p className="text-sm font-medium text-foreground">Experience our freshly brewed</p>
              <p className="text-lg font-bold text-cafe-turquoise">Greek Coffee</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="animate-bounce opacity-70">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xs mt-2 text-muted-foreground">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
