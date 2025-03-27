
import { useState, useEffect } from 'react';
import reviewsData from '../data/reviews.json';

type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const ReviewSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const reviews = reviewsData as Review[];

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

    const section = document.getElementById('reviews-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-cafe-turquoise' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews-section" className="section-container bg-gradient-to-b from-white to-cafe-babyBlue/20 py-16 md:py-24">
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="heading-lg mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it - here's what our customers have to say about their experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-card transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center mb-4">
              {renderStars(review.rating)}
            </div>
            <p className="text-foreground mb-4">"{review.comment}"</p>
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">{review.name}</h4>
              <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
