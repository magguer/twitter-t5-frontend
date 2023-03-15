import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const createUser = async () => {
    const response = await axios({
      method: "POST",
      url: "http://localhost:8000/user",
      data: {
        firstname,
        lastname,
        username,
        email,
        img,
        password,
      },
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response);
    navigate("/login");
  };

  return (
    <div
      className="text-emphasis-primary"
      style={{ backgroundColor: "#065990" }}
    >
      <div className="container py-5">
        <div className="row g-0 shadow overflow-hidden rounded shadow">
          <div
            className="container d-none col-md-4 col-lg-8 text-white d-md-flex align-items-start flex-column"
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
            <div className="col mb-3 ms-3 d-flex align-items-end">
              <strong>
                <p className="fs-5">Hi! Welcome to Twitter Clone 👋</p>
              </strong>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-4 bg-white text-dark d-flex justify-content-center align-items-center">
            <form onSubmit={createUser}>
              <div className="container">
                <div className="my-5">
                  <h2 className="fw-bold">Sign up</h2>
                  <small className="fw-semibold">
                    Create an account and start using Twitter
                  </small>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">First name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Last name</label>
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
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Username</label>
                </div>

                <div className="mb-3">
                  <input
                    onChange={(e) => setImg(e.target.value)}
                    className="form-control"
                    name="image"
                    id="image"
                    type="file"
                  />
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
                    Sign up
                  </button>
                </div>
                <div className="my-5 text-center">
                  <Link
                    to="/login"
                    className="text-decoration-none text-dark fw-semibold"
                    role="button"
                  >
                    Already have an account? Sign in.
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
