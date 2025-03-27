
import Hero from "../components/Hero";
import CoffeeSection from "../components/CoffeeSection";
import MenuSection from "../components/MenuSection";
import ReviewSection from "../components/ReviewSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <CoffeeSection />
      
      {/* About Section */}
      <section id="about" className="section-container" aria-labelledby="about-section-title">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cafe-sand/30 backdrop-blur-sm border border-cafe-sand/20">
              <p className="text-sm font-medium text-foreground">Our Story</p>
            </div>
            <h2 id="about-section-title" className="heading-lg mb-6">
              A Taste of Greece in Every Bite
            </h2>
            <p className="text-muted-foreground mb-4">
              Welcome to Ciel Café, where we bring the authentic flavors of Greece to your table. Our journey began with a simple desire: to share the rich culinary traditions of our homeland with our community.
            </p>
            <p className="text-muted-foreground mb-4">
              Every dish we serve is crafted with locally sourced ingredients and traditional recipes passed down through generations.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="px-6 py-2.5 bg-cafe-turquoise text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
                aria-label="Read more about our story"
              >
                Read More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-cafe-sand/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Greek food" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute top-10 -right-5 glass-card p-4 shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-20 max-w-[200px]"
            >
              <p className="text-sm font-medium text-foreground">Made with love using</p>
              <p className="text-lg font-bold text-cafe-turquoise">Traditional Recipes</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <MenuSection />
      
      {/* Special Feature Section */}
      <section className="py-16 md:py-24 bg-cafe-turquoise/10" aria-label="Special features">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 text-center transform hover:translateY(-5px) transition-transform duration-300"
            >
              <div className="bg-cafe-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cafe-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Ciel Coffee</h3>
              <p className="text-muted-foreground">
                Experience the rich tradition of Greek coffee, brewed to perfection using time-honored methods.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8 text-center transform hover:translateY(-5px) transition-transform duration-300"
            >
              <div className="bg-cafe-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cafe-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Our dishes are crafted from generations-old family recipes, bringing the true taste of Greece to your table.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-card p-8 text-center transform hover:translateY(-5px) transition-transform duration-300"
            >
              <div className="bg-cafe-turquoise/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cafe-turquoise" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Warm Hospitality</h3>
              <p className="text-muted-foreground">
                We believe in the Greek tradition of philoxenia - making every guest feel welcomed like family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Index;
