function Admin() {
  return (
    <div className="events-section">
      <h1>Admin Dashboard</h1>

      <div className="registration-card">
        <h3>Add New Event</h3>

        <input
          type="text"
          placeholder="Event Name"
          className="admin-input"
        />

        <input
          type="text"
          placeholder="Date"
          className="admin-input"
        />

        <input
          type="text"
          placeholder="Venue"
          className="admin-input"
        />

        <button>Add Event</button>
      </div>
    </div>
  );
}

export default Admin;