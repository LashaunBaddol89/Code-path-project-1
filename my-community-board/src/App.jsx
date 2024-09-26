
import EventCard from './components/EventCard';
import './App.css';
import basketballImage from './assets/basketball.jpeg';
import cleanImage from './assets/communityclean.jpg';
import softwareImage from './assets/softwareeng.jpg';
import concertImage from './assets/concert.jpg';
import codImage from './assets/codingworkshop.jpg';
import yogImage from './assets/yoga.jpg';
import enImage from './assets/softwareeng.jpg';
import hikImage from './assets/hiking.jpg';
import bookImage from './assets/bookclub.jpg';
import foodImage from './assets/fooddrive.jpg';

const eventsGroup1 = [
  { title: "Basketball Game", description: "Local game this Friday", link: "/game-details", image: basketballImage  },
  { title: "Software Engineering Course", description: "Learn the basics of software engineering", link: "/software-course", image: softwareImage },
  { title: "Community Cleanup", description: "Help clean up the local park", link: "/cleanup", image: cleanImage },
  { title: "Concert", description: "Live music event", link: "/concert", image: concertImage },
  { title: "Coding Workshop", description: "Learn to code in JavaScript", link: "/workshop", image: codImage }
];

const eventsGroup2 = [
  { title: "Yoga Session", description: "Outdoor yoga in the park", link: "/yoga", image: yogImage },
  { title: "Art Class", description: "Painting with a local artist", link: "/art-class", image: enImage },
  { title: "Hiking Trip", description: "Explore local hiking trails", link: "/hiking-trip", image: hikImage },
  { title: "Book Club", description: "Discuss the latest bestseller", link: "/book-club", image: bookImage },
  { title: "Food Drive", description: "Donate canned goods for charity", link: "/food-drive", image: foodImage }
];

const announcements = [
  "New playground opening next week!",
  "Community Yoga every Sunday at 8 AM",
  "Basketball tournament on Friday",
  "Don't miss the neighborhood cleanup this Saturday"
];

const App = () => {
  return (
    <div className="community-board">
      <header className="header">
        <h1>Community Board</h1>
      </header>
      
      <div className="board-container">
        <div className="event-board">
          <div className="event-group">
            {eventsGroup1.map((event, index) => (
              <EventCard key={index} title={event.title} description={event.description} link={event.link} image={event.image} />
            ))}
          </div>
          <div className="event-group">
            {eventsGroup2.map((event, index) => (
              <EventCard key={index} title={event.title} description={event.description} link={event.link} image={event.image} />
            ))}
          </div>
        </div>
        
        <div className="right-section">
          <h2>Community Announcements</h2>
          <ul>
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;