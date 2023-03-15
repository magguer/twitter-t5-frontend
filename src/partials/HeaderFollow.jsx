import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderFollow({ userFollowing, showFollowers, setShowFollowers }) {
  return (
    <div className="col-10 col-lg-7 p-0 w-100">
      <div className="px-3 pt-3">
        {/* <!--           Flecha Atrás --> */}
        <div className="d-flex align-items-center mt-4">
          <Link className="text-decoration-none text-black fs-4" to={`/`}>
            🡠
          </Link>
          <div className="d-flex align-items-start flex-column ms-4">
            <h5 className="mb-0">
              {userFollowing.firstname} {userFollowing.lastname}
            </h5>
            <small>@{userFollowing.username}</small>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-around">
        <div>
          <button
            onClick={() => setShowFollowers(true)}
            className="btn fs-5 text-black fw-semibold text-decoration-none"
          >
            Followers
          </button>
          {showFollowers ? (
            <div
              style={{
                transitionDuration: "200ms",
                transitionProperty: "all",
                opacity: "100%",
                background: "#1d9bf0",
                width: "100%",
                height: "4px",
                marginTop: "8px",
              }}
            ></div>
          ) : (
            <div
              style={{
                transitionDuration: "200ms",
                transitionProperty: "all",
                opacity: "0%",
                background: "#1d9bf0",
                width: "100%",
                height: "4px",
                marginTop: "8px",
              }}
            ></div>
          )}
        </div>
        <div>
          <button
            onClick={() => setShowFollowers(false)}
            className="btn fs-5 text-black fw-semibold text-decoration-none"
          >
            Followings
          </button>
          {!showFollowers ? (
            <div
              style={{
                transitionDuration: "200ms",
                transitionProperty: "all",
                opacity: "100%",
                background: "#1d9bf0",
                width: "100%",
                height: "4px",
                marginTop: "8px",
              }}
            ></div>
          ) : (
            <div
              style={{
                transitionDuration: "200ms",
                transitionProperty: "all",
                opacity: "0%",
                background: "#1d9bf0",
                width: "100%",
                height: "4px",
                marginTop: "8px",
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderFollow;
