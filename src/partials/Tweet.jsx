import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { actualize } from "../redux/resetSlice";

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // Delete de tweet
  const handleDeleteTweet = async (e) => {
    dispatch(actualize());
    e.preventDefault();

    await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/tweets/${tweet._id}`,
    });
  };
  return (
    <>
      <div className="d-flex w-100 p-3 border-top border-succes gap-3">
        <img
          style={{ width: "2.5rem" }}
          className="figure-img img-fluid rounded-pill align-self-start"
          alt="img"
          src={tweet.user.image}
        />
        {/* a partir de aca */}
        <div class="d-flex flex-column w-100">
          <div class="d-flex align-items-center gap-1">
            {/* LINK  usuario */}
          </div>
          <div className="">
            <div className="d-flex gap-2 align-items-center">
              <small className="text-decoration-none text-black fw-semibold mb-0 p-0">
                {tweet.user.firstname} {tweet.user.lastname}
              </small>
              <small
                className="p-0 m-0"
                style={{ fontSize: "0.8rem", color: "#969696" }}
              >
                @{tweet.user.username}
              </small>
            </div>
            <p className="mb-2">{tweet.text}</p>
            {/*  Botones */}
            <div className="d-flex w-100 justify-content-between">
              <button
                type="submit"
                className="border border-white bg-white m-0 p-0 d-flex align-items-center"
              >
                <img
                  src="https://svgur.com/i/qen.svg"
                  className="img-fluid object-fit"
                  style={{ width: "1rem" }}
                  alt="heart-white"
                />
              </button>
              <button
                type="submit"
                className="border border-white bg-white m-0 p-0 d-flex align-items-center"
                onClick={handleDeleteTweet}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                  className="img-fluid object-fit"
                  style={{ width: "1rem" }}
                  alt="trash-can"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tweet;
