import React from 'react';
import './EventCard.css';  // Import CSS for styling

const EventCard = ({ title, description, link }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn">Learn More</a>
    </div>
  );
};

export default EventCard;
