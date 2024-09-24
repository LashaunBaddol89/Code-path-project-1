import React from 'react';
import EventCard from './components/EventCard';  // Import EventCard component

const events = [
  { title: "Basketball Game", description: "Local game this Friday", link: "/game-details" },
  { title: "Software Engineering Course", description: "Learn the basics of software engineering", link: "/software-course" },
  { title: "Community Cleanup", description: "Help clean up the local park", link: "/cleanup" },
  { title: "Concert", description: "Live music event", link: "/concert" },
  { title: "Coding Workshop", description: "Learn to code in JavaScript", link: "/workshop" },
  { title: "Yoga Session", description: "Outdoor yoga in the park", link: "/yoga" },
  { title: "Art Class", description: "Painting with a local artist", link: "/art-class" },
  { title: "Hiking Trip", description: "Explore local hiking trails", link: "/hiking-trip" },
  { title: "Book Club", description: "Discuss the latest bestseller", link: "/book-club" },
  { title: "Food Drive", description: "Donate canned goods for charity", link: "/food-drive" }
];

const App = () => {
  return (
    <div className="event-board">
      {events.map((event, index) => (
        <EventCard key={index} title={event.title} description={event.description} link={event.link} />
      ))}
    </div>
  );
};

export default App;