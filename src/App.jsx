import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Register from "./components/Register";
import AuthRequire from "./hooks/AuthRequire";
import NoAuthRequire from "./hooks/NoAuthRequire";
import Layout from "./layout/Layout";
import Followers from "./components/Followers";
import Following from "./components/Following";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Toast FX

  const unavailableFunction = () => {
    return toast.info("Función en desarrollo.", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="App">
      <div>
        <ToastContainer />
      </div>
      <div className="">
        <Routes>
          <Route element={<NoAuthRequire />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<AuthRequire />}>
            <Route
              element={<Layout unavailableFunction={unavailableFunction} />}
            >
              <Route
                path="/"
                element={<Home unavailableFunction={unavailableFunction} />}
              />
              <Route
                path="/:username"
                element={<Profile unavailableFunction={unavailableFunction} />}
              />
              <Route path="/:username/followers" element={<Followers />} />
              <Route path="/:username/following" element={<Following />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
