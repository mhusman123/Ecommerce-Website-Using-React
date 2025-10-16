import React from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const items = [
    "Free Delivery Across Pakistan",
    "30% OFF on All Products",
    "Buy 1 Get 1 Free",
    "Cash on Delivery Available",
    "Hassle-free Returns",
  ];

  return (
    <div className="announcement-bar bg-dark text-white small">
      <div className="announcement-track">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="announcement-pill">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
