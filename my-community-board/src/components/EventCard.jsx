import React from 'react';
import PropTypes from 'prop-types';
import './EvantCard.css'; // Make sure you have your styles

const EventCard = ({ title, description, link, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
      <a href={link} className="event-link">More Details</a>
    </div>
  );
};

// PropTypes validation
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default EventCard;
