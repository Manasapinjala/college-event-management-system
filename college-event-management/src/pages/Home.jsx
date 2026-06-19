import { useState } from "react";
import EventCard from "../components/EventCard";

import iste1 from "../assets/iste1.jpeg";
import iste2 from "../assets/iste2.jpeg";
import iste3 from "../assets/iste3.jpeg";

function Home() {
const [search, setSearch] = useState("");
const [selectedEvent, setSelectedEvent] = useState(null);
const [darkMode, setDarkMode] = useState(false);

const events = [
{
image: iste1,
title: "Hackathon 2026",
date: "2026-07-25",
venue: "Seminar Hall",
description: "24-hour coding competition for innovative solutions.",
},
{
image: iste2,
title: "Brain Builders",
date: "2026-07-28",
venue: "Block A",
description: "Fun team-building and problem-solving event.",
},
{
image: iste3,
title: "Ride The Rhythm",
date: "2026-07-30",
venue: "Auditorium",
description: "Music, fun activities, and exciting challenges.",
},
];

const filteredEvents = events.filter((event) =>
event.title.toLowerCase().includes(search.toLowerCase())
);

const getDaysLeft = (eventDate) => {
const today = new Date();
const target = new Date(eventDate);


const diff = target.getTime() - today.getTime();

return Math.ceil(diff / (1000 * 60 * 60 * 24));


};

return (
<div className={darkMode ? "dark" : ""}> <div className="hero"> <h1>Discover Amazing Campus Events</h1>


    <p>
      Join hackathons, workshops, cultural events and competitions.
    </p>

    <button
      className="dark-btn"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  </div>

  <div className="search-container">
    <input
      type="text"
      placeholder="🔍 Search Events..."
      className="search-bar"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  <div className="events-section">
    <h2>Upcoming Events</h2>

    <div className="event-grid">
      {filteredEvents.map((event, index) => (
        <EventCard
          key={index}
          image={event.image}
          title={event.title}
          date={event.date}
          venue={event.venue}
          daysLeft={getDaysLeft(event.date)}
          onClick={() => setSelectedEvent(event)}
        />
      ))}
    </div>
  </div>

  {selectedEvent && (
    <div className="modal">
      <div className="modal-content">
        <h2>{selectedEvent.title}</h2>

        <p>📅 {selectedEvent.date}</p>

        <p>📍 {selectedEvent.venue}</p>

        <p>{selectedEvent.description}</p>

        <button
          onClick={() => setSelectedEvent(null)}
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>


);
}

export default Home;
