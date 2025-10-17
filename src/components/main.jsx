import React, { useState, useEffect } from "react";

const Home = () => {
  // Hero slider configuration - easily customize images and text
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=500&fit=crop",
      title: "New Season Arrivals",
      description: "Discover the latest trends in fashion, electronics, and jewelry. Shop now and save big!",
      bgColor: "rgba(0,0,0,0.5)"
    },
    {
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=500&fit=crop",
      title: "30% OFF Storewide",
      description: "Limited time offer! Get amazing discounts on all your favorite products.",
      bgColor: "rgba(220,53,69,0.6)"
    },
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=500&fit=crop",
      title: "Free Delivery Across Pakistan",
      description: "No minimum order required. Shop from home and get it delivered to your doorstep for free!",
      bgColor: "rgba(25,135,84,0.6)"
    },
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=500&fit=crop",
      title: "Buy 1 Get 1 Free",
      description: "Double the joy! Purchase any item and get another one absolutely free. Don't miss out!",
      bgColor: "rgba(13,110,253,0.6)"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3 position-relative overflow-hidden" style={{ minHeight: '400px' }}>
          {/* Slide images */}
          {slides.map((slide, index) => (
            <img
              key={index}
              className="card-img img-fluid position-absolute top-0 start-0 w-100 h-100"
              src={slide.image}
              alt={slide.title}
              style={{
                objectFit: 'cover',
                opacity: currentSlide === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                zIndex: currentSlide === index ? 1 : 0
              }}
            />
          ))}
          
          {/* Text overlay with dynamic content */}
          <div 
            className="card-img-overlay d-flex align-items-center" 
            style={{ 
              background: slides[currentSlide].bgColor,
              zIndex: 2,
              transition: 'background 1s ease-in-out'
            }}
          >
            <div className="container">
              <h5 
                className="card-title fs-1 fw-bold mb-3"
                style={{
                  animation: 'fadeInUp 0.8s ease-out',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
              >
                {slides[currentSlide].title}
              </h5>
              <p 
                className="card-text fs-5 d-none d-sm-block mb-4"
                style={{
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                  maxWidth: '600px'
                }}
              >
                {slides[currentSlide].description}
              </p>
              
              {/* Slide indicators */}
              <div className="d-flex gap-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="btn btn-sm rounded-circle p-0"
                    style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.5)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Home;
