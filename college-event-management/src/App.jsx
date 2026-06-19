import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import MyEvents from "./pages/MyEvents";
import Admin from "./pages/Admin";

function App() {
return (
<> <Navbar />

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/my-events" element={<MyEvents />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
</>


);
}

export default App;
