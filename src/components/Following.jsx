import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../redux/userSlice";

function Following() {
  const [userFollowing, setuserFollowing] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.userName);
  console.log(username);

  useEffect(() => {
    const getFollowing = async (e) => {
      e.preventDefault();
      const response = await axios.get(
        "http://localhost:8000/${username}/following"
      );
      const user = response.data;
      dispatch(login(user));
    };
    getFollowing();
  });

  return (
    <>
      <div className="row">
        {/* <!--       NavBar --> */}
        <div className="col-2 border p-0">
          {/* <%- include("../partials/navbar") %> */}
        </div>
        {/* <!--       Body --> */}
        <div className="col-10 col-lg-7 p-0">
          <div className="px-3 pt-3">
            {/* <!--           Flecha Atrás --> */}
            <div className="d-flex align-items-center mt-4">
              <a
                className="text-decoration-none text-black fs-4"
                href="/usuarios/<%= userFollowing.username %>"
              >
                🡠
              </a>
              <div className="d-flex align-items-start flex-column ms-4">
                <h5 className="mb-0">
                  {/* <%= userFollowing.firstname %> <%= userFollowing.lastname %> */}
                </h5>
                <small>{/* @<%= userFollowing.username %> */}</small>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-around">
            <div>
              <a
                href="followers"
                className="fs-5 text-black fw-semibold text-decoration-none"
              >
                Followers
              </a>
            </div>
            <div>
              <a className="fs-5 text-black fw-semibold text-decoration-none">
                Following
              </a>
              <div
                style={{
                  background: "#1d9bf0",
                  width: "100%",
                  height: "4px",
                  marginTop: "8px",
                }}
              ></div>
            </div>
          </div>
          <div className="d-flex flex-column border-top pt-4">
            {/* <!-- TO DO: Hacer que entre a el arreglo following dentro del Modelo User --> */}
            {/* <% for (const smallUser of users){%>
          <!-- comment -->
          <!-- comment -->
          <%- include("../partials/smallUser", { smallUser, globalUser }) %>
          <!-- comment -->
          <%}%> */}
          </div>
        </div>
        {/* <!--       More info --> */}
        <div className="col-4 d-none d-lg-block col-lg-3 border p-0">
          {/* <%- include("../partials/moreinfo", { usersInfo, globalUser }) %> */}
        </div>
      </div>
    </>
  );
}

export default Following;
