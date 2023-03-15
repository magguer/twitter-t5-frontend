import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

function Following() {
  const [userFollowing, setUserFollowing] = useState([]);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios.get(
        `http://localhost:8000/usuarios/${user.userName}/following`
      );
      console.log(response);
      setUserFollowing(response.data.users);
    };
    getFollowing();
  }, []); // eslint-disable-line

  return (
    <>
      <div className="col-10 row d-flex justify-content-center">
        <div className="col-10 col-lg-7 p-0">
          <div className="px-3 pt-3">
            {/* <!--           Flecha Atrás --> */}
            <div className="d-flex align-items-center mt-4">
              <a
                className="text-decoration-none text-black fs-4"
                href="/usuarios/<%= userFollowers.username %>"
              >
                🡠
              </a>
              <div className="d-flex align-items-start flex-column ms-4">
                <h5 className="mb-0">
                  {/* <%= userFollowers.firstname %> <%= userFollowers.lastname %> */}
                </h5>
                <small>{/* @<%= userFollowers.username %> */}</small>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-around">
            <div>
              <p className="fs-5 text-black fw-semibold text-decoration-none">
                Followers
              </p>
              <div
                style={{
                  background: "#1d9bf0",
                  width: "100%",
                  height: "4px",
                  marginTop: "8px",
                }}
              ></div>
            </div>
            <div>
              <a
                href="following"
                className="fs-5 text-black fw-semibold text-decoration-none"
              >
                Following
              </a>
            </div>
          </div>
          <div className="col-10 d-flex flex-column border-top pt-4">
            {userFollowing.map((user) => {
              return (
                <div className="d-flex">
                  <img
                    src={user.image}
                    className="rounded rounded-pill "
                    alt="avatar"
                    style={{ width: "3rem" }}
                  />
                  <strong>
                    <p className="ms-3">
                      {user.firstname} {user.lastname}
                    </p>
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Following;
