import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const CoffeeSection = () => {
  const coffeeImages = [
    {
      url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Traditional Greek coffee",
      title: "Greek Coffee",
      description: "Rich, strong brew with traditional foam (kaimaki)"
    },
    {
      url: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      alt: "Freddo espresso coffee",
      title: "Freddo Espresso",
      description: "Iced espresso with creamy foam, Greek summer favorite"
    },
    {
      url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80",
      alt: "Latte art in a coffee cup",
      title: "Artisan Latte",
      description: "Smooth espresso with velvety steamed milk"
    }
  ];

  return (
    <section className="py-14 bg-cafe-sand/10" aria-labelledby="coffee-section-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-cafe-turquoise/30 backdrop-blur-sm border border-cafe-turquoise/20">
            <Coffee size={18} className="text-cafe-turquoise mr-2" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">Coffee Experience</span>
          </div>
          <h2 id="coffee-section-title" className="text-4xl md:text-5xl font-bold mb-5">
            Our Premium Coffee Selection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our carefully selected coffee beans and traditional Greek brewing methods that create an unforgettable experience for every coffee lover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
          {coffeeImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={600}
                  height={750}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-white text-2xl font-bold mb-2">{image.title}</h3>
                  <p className="text-cafe-sand/90">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Coffee size={20} className="text-cafe-turquoise" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;