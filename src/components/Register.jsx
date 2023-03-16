import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("image", image);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);

    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/user`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.status !== 201) {
      console.log("Algo salió mal.");
    } else {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/token`,
        {
          email,
          password,
        }
      );
      const user = response.data;
      dispatch(login(user));
      navigate(`/`);
    }
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
                    onChange={(e) => setImage(e.target.files[0])}
                    multiple
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
