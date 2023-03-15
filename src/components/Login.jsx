// Dependencias
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// Slice
import { login } from "../redux/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getToken = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/usuarios/tokens", {
      email,
      password,
    });
    const user = response.data;
    dispatch(login(user));
    navigate(`/`);
  };

  return (
    <div
      className="text-emphasis-primary"
      style={{ backgroundColor: "#065990", height: "100vh" }}
    >
      <div className="container py-5">
        <div
          className="row g-0 rounded overflow-hidden shadow"
          style={{ height: "80vh" }}
        >
          <div
            className="container d-none col-lg-8 col-md-4 text-white d-md-flex align-items-start flex-column"
            style={{ backgroundColor: "#1d9bf0" }}
          >
            <div className="col ms-3 mt-3">
              <img
                className="mt-3"
                style={{ width: "3rem", height: "3rem" }}
                src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/ha.dev%2FTeam5-TwitterApp%2Flogo-twitter-white.svg?alt=media&token=386c4a48-1183-4cc7-8b66-8ad36ec10dc4"
                alt="Twitter"
              />
            </div>
            <div className="col d-flex align-items-end ms-3 mb-3">
              <strong>
                <p className="fs-5">Hi! Nice to see you again 🥰</p>
              </strong>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-8 bg-white text-dark d-flex align-items-center justify-content-center">
            <form onSubmit={getToken}>
              <div className="mt-5 mb-3">
                <h2 className="fw-bold">Login</h2>
                <small className="fw-semibold">
                  Ready to start using Twitter?
                </small>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-grid gap-1 my-5">
                <button
                  className="btn text-light"
                  style={{ borderRadius: "45px", backgroundColor: "#1d9bf0" }}
                  type="submit"
                >
                  Login
                </button>
              </div>
              <div className="my-5 text-center">
                <Link
                  to="/register"
                  className="text-decoration-none text-dark fw-semibold"
                  role="button"
                >
                  Don't have an account? Sign Up.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
