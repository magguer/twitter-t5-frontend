import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SmallUser from "./SmallUser";

function MoreInfo() {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  //Llamado de users
  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        method: "get",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        url: `${process.env.REACT_APP_API_URL}/usuarios/random`,
      });
      setUsers(response.data);
    };
    getUser();
  }, []); // eslint-disable-line
  return (
    <div className="sticky-top">
      <div className="sticky-top d-flex flex-column ps-3 pe-5 py-3">
        {/* What's happening */}
        <div className="d-flex flex-column">
          <div className="input-group mb-3">
            <button className="input-group-text" id="basic-addon1">
              <img src="https://svgur.com/i/rJP.svg" alt="" />
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search on Twitter..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div
            style={{ backgroundColor: "#ededed" }}
            className="rounded-3 p-3 mb-3"
          >
            <h3 className="fs-5 fw-bold">What's happening</h3>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-column">
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  Trend in Germany
                </small>
                <h4 className="fs-6 mb-0">#Herni_Is_Coming</h4>
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  103.8K Tweets
                </small>
              </div>
              <div className="d-flex flex-column">
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  Trending in Hack Academy
                </small>
                <h4 className="fs-6 mb-0">#ComeBackFranciscoCobas</h4>
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  95.3K Tweets
                </small>
              </div>
              <div className="d-flex flex-column">
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  Trending in Argentina
                </small>
                <h4 className="fs-6 mb-0">#MagguerAtLollapalooza</h4>
                <small
                  style={{
                    fontSize: "0.7rem",
                    color: "#969696",
                    fontWeight: 500,
                  }}
                >
                  87.9K Tweets
                </small>
              </div>
            </div>
          </div>

          {/* Who to Follow */}
          <div style={{ backgroundColor: "#ededed" }} className="rounded-3">
            <div className="pt-2 px-3">
              <h3 className="fs-5 fw-bold">Who to follow</h3>
            </div>
            {user.id !== users.id
              ? users.map((user, i) => {
                  return <SmallUser key={i} smallUser={user} />;
                })
              : users.map((user, i) => {
                  return <SmallUser key={i} smallUser={user} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
