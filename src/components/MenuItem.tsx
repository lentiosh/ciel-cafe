
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type MenuItemProps = {
  item: {
    name: string;
    description: string;
    price: number;
    image?: string;
  };
  category: string;
};

const MenuItem = ({ item, category }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getImageUrl = () => {
    if (item.image) return item.image;
    
    // Generate a fallback image URL based on category and item name
    const searchTerm = encodeURIComponent(item.name.toLowerCase());
    let categoryTerm = '';
    
    if (category === 'breakfast') categoryTerm = 'breakfast,food';
    else if (category === 'lunch') categoryTerm = 'greek,food';
    else categoryTerm = 'drink,coffee';
    
    return `https://source.unsplash.com/random/600x400/?${searchTerm},${categoryTerm}`;
  };

  return (
    <>
      <div
        className="menu-item cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1"
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        aria-label={`View details for ${item.name}`}
      >
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src={getImageUrl()}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
        </div>
        <h3 className="font-bold text-xl mb-2">{item.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
        <span className="font-bold text-cafe-turquoise">${item.price.toFixed(2)}</span>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{item.name}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={getImageUrl()}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="bg-cafe-sand/30 p-4 rounded-lg mb-4">
                <p className="font-medium mb-1">Price</p>
                <p className="text-2xl font-bold text-cafe-turquoise">${item.price.toFixed(2)}</p>
              </div>
              <div className="bg-cafe-babyBlue/30 p-4 rounded-lg">
                <p className="font-medium mb-1">Category</p>
                <p className="capitalize">{category}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="px-6 py-2 bg-cafe-turquoise text-white rounded-lg hover:bg-cafe-turquoise/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MenuItem;
