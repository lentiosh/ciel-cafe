
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import breakfastItems from '../data/breakfast.json';
import lunchItems from '../data/lunch.json';
import drinkItems from '../data/drinks.json';

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image?: string;
};

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'breakfast', label: 'Breakfast', data: breakfastItems },
  { id: 'lunch', label: 'Greek Lunch', data: lunchItems },
  { id: 'drinks', label: 'Coffee & Drinks', data: drinkItems },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return [
        ...breakfastItems, 
        ...lunchItems, 
        ...drinkItems
      ] as MenuItem[];
    }
    
    const category = categories.find(cat => cat.id === activeCategory);
    return category?.data || [] as MenuItem[];
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-gradient-to-b from-cafe-babyBlue/30 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-cafe-sand/30 backdrop-blur-sm border border-cafe-sand/20">
              <p className="text-sm font-medium text-foreground">Our Offerings</p>
            </div>
            <h1 className="heading-lg mb-4">Explore Our Menu</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our full selection of Greek-inspired breakfast dishes, authentic lunch options, and specialty beverages
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cafe-turquoise text-white shadow-lg shadow-cafe-turquoise/20'
                    : 'bg-cafe-sand/30 text-foreground hover:bg-cafe-sand/50'
                }`}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pb-16">
        {activeCategory === 'all' ? (
          <>
            <div className="menu-category animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="heading-md mb-6 text-center">Breakfast</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {breakfastItems.map((item: MenuItem, index) => (
                  <div 
                    key={`breakfast-${item.name}`}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <MenuItem item={item} category="breakfast" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="menu-category animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="heading-md mb-6 text-center">Greek Lunch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lunchItems.map((item: MenuItem, index) => (
                  <div 
                    key={`lunch-${item.name}`}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <MenuItem item={item} category="lunch" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="menu-category animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h2 className="heading-md mb-6 text-center">Coffee & Drinks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drinkItems.map((item: MenuItem, index) => (
                  <div 
                    key={`drink-${item.name}`}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <MenuItem item={item} category="drinks" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="menu-category animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item: MenuItem, index) => (
                <div 
                  key={`${activeCategory}-${item.name}`}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <MenuItem item={item} category={activeCategory} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Call to Action */}
      <section className="bg-cafe-turquoise/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="heading-md mb-4">Visit Us Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience our authentic Greek cuisine and specialty coffee in person. We're looking forward to serving you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-cafe-turquoise text-white font-medium transition-all hover:shadow-lg hover:shadow-cafe-turquoise/20 hover:-translate-y-0.5"
            >
              Make a Reservation
            </a>
            <a
              href="#"
              className="px-8 py-3 rounded-lg bg-transparent border border-cafe-sand text-foreground font-medium transition-all hover:bg-cafe-sand/10"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;
