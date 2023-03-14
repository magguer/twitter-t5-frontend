import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Profile from "./components/Profile";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/:username/followers" element={<Followers />} />
        <Route path="/:username/following" element={<Following />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
