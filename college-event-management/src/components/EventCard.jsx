function EventCard({ image, title, date, venue, onRegister }) {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />

      <h3>{title}</h3>

      <p>📅 {date}</p>
      <p>📍 {venue}</p>

      <button onClick={onRegister}>
        Register
      </button>
    </div>
  );
}

export default EventCard;