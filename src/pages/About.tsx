
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section with ARIA landmark */}
        <section 
          aria-labelledby="about-heading" 
          className="pt-20 pb-16 md:py-24 lg:py-32 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp}>
                <h1 
                  id="about-heading"
                  className="heading-xl mb-6 text-foreground"
                >
                  Our Story
                </h1>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <p className="text-lg md:text-xl text-muted-foreground mb-10">
                  Discover the authentic taste of Greece in every bite at Athena's Café
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content Section with ARIA landmark */}
        <section 
          aria-label="About Athena's Café" 
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cafe-sand/30 backdrop-blur-sm border border-cafe-sand/20">
                  <p className="text-sm font-medium text-foreground">Our Heritage</p>
                </div>
                <h2 className="heading-lg mb-6">
                  A Taste of Greece in Every Bite
                </h2>
                <p className="text-muted-foreground mb-6">
                  Welcome to Athena's Café, where we bring the authentic flavors of Greece to your table. Our journey began with a simple desire: to share the rich culinary traditions of our homeland with our community.
                </p>
                <p className="text-muted-foreground mb-6">
                  Every dish we serve is crafted with locally sourced ingredients and traditional recipes passed down through generations. From our homemade Greek yogurt to our slow-cooked moussaka, each bite tells a story of Mediterranean heritage.
                </p>
                <p className="text-muted-foreground">
                  Our coffee, brewed using traditional Greek methods, offers a unique experience that pairs perfectly with our freshly baked pastries. We invite you to join us for a meal that not only satisfies your hunger but transports you to the sun-soaked shores of Greece.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cafe-sand/40 to-transparent z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                    alt="Traditional Greek dishes prepared at Athena's Café" 
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
          </div>
        </section>
        
        {/* Values Section with ARIA landmark */}
        <section 
          aria-labelledby="values-heading" 
          className="py-16 md:py-24 bg-cafe-turquoise/10"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 id="values-heading" className="heading-lg mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Athena's Café, our philosophy is rooted in three fundamental principles that guide everything we do.
              </p>
            </motion.div>
            
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
                <h3 className="font-bold text-xl mb-2">Artisanal Coffee</h3>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
