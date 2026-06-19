function EventCard({
  image,
  title,
  date,
  venue,
  daysLeft,
  onRegister,
  onClick,
}){
  return (
    <div
      className="event-card"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="event-image"
      />

      <h3>{title}</h3>

      <p>📅 {date}</p>
      <p>📍 {venue}</p>
      <p>
  ⏳ {daysLeft} Days Left
</p>

      {onRegister && (
  <button
    onClick={(e) => {
      e.stopPropagation();
      onRegister();
    }}
  >
    Register
  </button>
)}
    </div>
  );
}

export default EventCard;