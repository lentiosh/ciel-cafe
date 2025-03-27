
import { useState, useEffect } from 'react';
import breakfastItems from '../data/breakfast.json';
import lunchItems from '../data/lunch.json';
import drinkItems from '../data/drinks.json';
import { Link } from 'react-router-dom';

type MenuItem = {
  name: string;
  description: string;
  price: number;
  image: string;
};

const categories = [
  { id: 'drinks', label: 'Coffee & Drinks', data: drinkItems },
  { id: 'breakfast', label: 'Breakfast', data: breakfastItems },
  { id: 'lunch', label: 'Greek Lunch', data: lunchItems },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Find the category and set its items
    const category = categories.find(cat => cat.id === activeCategory);
    if (category) {
      setItems(category.data as MenuItem[]);
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('menu-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <section id="menu-section" className="section-container py-16 md:py-24">
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="heading-lg mb-4">Our Delicious Menu</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our selection of authentic Greek dishes, breakfast favorites, and expertly crafted beverages
        </p>
      </div>

      {/* Category Tabs */}
      <div className={`flex flex-wrap justify-center gap-2 md:gap-4 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-cafe-turquoise text-white shadow-lg shadow-cafe-turquoise/20'
                : 'bg-cafe-sand/30 text-foreground hover:bg-cafe-sand/50'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {items.slice(0, 3).map((item, index) => (
          <div 
            key={item.name}
            className={`menu-item animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-4">
              <img
                src={`https://source.unsplash.com/random/600x400/?${encodeURIComponent(item.name.toLowerCase())},food`}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-xl mb-2">{item.name}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-cafe-turquoise">£{item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/menu"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-transparent border border-cafe-sand text-foreground font-medium transition-all hover:bg-cafe-sand/10"
        >
          View Full Menu
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default MenuSection;
