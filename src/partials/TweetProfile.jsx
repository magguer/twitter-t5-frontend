import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actualize } from "../redux/resetSlice";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import LikesModal from "./LikesModal";
//import { formatDateDistance } from "./date-fns";

function TweetProfile({ userProfile, tweet }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleLikesModal = () => setShow(true);
  const handleClose = () => setShow(false);

  const tweetLiked = tweet.likes.some(
    (like) => like.username === user.username
  );

  // Delete de tweet
  const handleDeleteTweet = async () => {
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "DELETE",
      url: `http://localhost:8000/tweets/${tweet._id}`,
    });
  };

  /* Like Tweet */
  const likeTweet = async () => {
    dispatch(actualize());
    if (!tweetLiked) {
      await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "PATCH",
        url: `http://localhost:8000/tweets/like/${tweet._id}`,
      });
    } else {
      await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "PATCH",
        url: `http://localhost:8000/tweets/dislike/${tweet._id}`,
      });
    }
  };

  /* console.log("CLG de la Profile", tweet.likes); */

  return (
    <>
      <LikesModal likes={tweet.likes} show={show} handleClose={handleClose} />
      <div className="d-flex w-100 p-3 border-top border-succes gap-3">
        <Link to={`/${userProfile.username}`}>
          <img
            style={{ width: "2.5rem", height: "2.3rem", objectFit: "cover" }}
            className="figure-img img-fluid rounded-pill align-self-start"
            alt="img"
            src={
              userProfile.image.includes("http")
                ? userProfile.image
                : `${process.env.REACT_APP_API_URL}/img/${userProfile.image}`
            }
          />
        </Link>
        {/* a partir de aca */}
        <div className="d-flex flex-column w-100">
          <div className="d-flex align-items-center gap-1">
            {/* LINK  usuario */}
          </div>
          <div className="">
            <div className="d-flex gap-1 align-items-center">
              <Link
                to={`/${userProfile.username}`}
                className="text-decoration-none text-black fw-semibold mb-0 p-0"
              >
                <small className="text-decoration-none text-black fw-semibold mb-0 p-0 d-flex align-items-center gap-1">
                  <div>
                    {userProfile.firstname} {userProfile.lastname}
                  </div>
                  {userProfile.verify && (
                    <img
                      style={{
                        width: "15px",
                        height: "15px",
                        marginTop: "3px",
                      }}
                      src="https://i.ibb.co/mDVVXN2/Twitter-Verified-Badge.png"
                      alt=""
                    />
                  )}
                </small>
              </Link>
              <small
                className="p-0 m-0"
                style={{ fontSize: "0.8rem", color: "#969696" }}
              >
                @{userProfile.username}
              </small>
              {/*FORMAT DISTANCE */}
              <small
                className="p-0 m-0"
                style={{ fontSize: "0.8rem", color: "#969696" }}
              >
                • {formatDistance(new Date(tweet.createdAt), new Date())}
              </small>
            </div>
            <p className="mb-2">{tweet.text}</p>
            {/*  Botones */}
            <div className="d-flex w-100 justify-content-between">
              {/*               Botón Like */}
              <div className="gap-2 align-items-center bg-white m-0 p-0 d-flex align-items-center">
                <button
                  onClick={likeTweet}
                  type="submit"
                  className="gap-2 align-items-center border border-white bg-white m-0 p-0 d-flex align-items-center"
                >
                  <img
                    src={
                      tweetLiked
                        ? "https://svgur.com/i/qen.svg"
                        : "https://cdn-icons-png.flaticon.com/512/2961/2961957.png"
                    }
                    className="img-fluid object-fit"
                    style={{ width: "1rem" }}
                    alt="heart-white"
                  />
                </button>
                <h2
                  onClick={handleLikesModal}
                  style={{
                    fontSize: "0.9rem",
                    color: "#000000",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                  className="m-0"
                >
                  {tweet.likes.length}
                </h2>
              </div>
              {user.username === userProfile.username && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TweetProfile;
