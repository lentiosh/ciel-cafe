
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Images as ImagesIcon } from "lucide-react";
import imagesData from "../data/images.json";

type ImageCategory = "all" | "coffee" | "food" | "cafe";

const Images = () => {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>("all");
  const [filteredImages, setFilteredImages] = useState(imagesData);
  const [selectedImage, setSelectedImage] = useState<(typeof imagesData)[0] | null>(null);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(imagesData);
    } else {
      setFilteredImages(imagesData.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories: { id: ImageCategory; label: string }[] = [
    { id: "all", label: "All Images" },
    { id: "coffee", label: "Coffee" },
    { id: "food", label: "Food" },
    { id: "cafe", label: "Café" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-cafe-babyBlue/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cafe-sand/30 backdrop-blur-sm border border-cafe-sand/20">
              <p className="text-sm font-medium text-foreground flex items-center justify-center gap-2">
                <ImagesIcon size={18} className="text-cafe-turquoise" aria-hidden="true" />
                <span>Our Gallery</span>
              </p>
            </div>
            <h1 className="heading-lg mb-4">Explore Our Café in Pictures</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a visual journey through our space, food, and coffee creations
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cafe-turquoise text-white shadow-lg shadow-cafe-turquoise/20'
                    : 'bg-cafe-sand/30 text-foreground hover:bg-cafe-sand/50'
                }`}
                aria-pressed={selectedCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md aspect-[4/3]"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="image-modal-title"
        >
          <div 
            className="relative max-w-4xl w-full bg-background rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <button 
              className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="p-6">
              <h2 id="image-modal-title" className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Images;
