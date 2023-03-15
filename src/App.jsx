import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import AuthRequire from "./hooks/AuthRequire";
import NoAuthRequire from "./hooks/NoAuthRequire";
import Layout from "./layout/Layout";
import FollowPage from "./components/FollowPage";

function App() {
  return (
    <div className="App">
      <div className="">
        <Routes>
          <Route element={<NoAuthRequire />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<AuthRequire />}>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:username/follows" element={<FollowPage />} />
              <Route path="/:username" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
