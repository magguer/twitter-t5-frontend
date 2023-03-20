import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { deleteTweet, likeTweet } from "../redux/tweetsSlice";
import { actualize } from "../redux/resetSlice";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import LikesModal from "./LikesModal";
import { useState } from "react";
//import { formatDateDistance } from "./date-fns";

function Tweet({ tweet }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  /*
  const tweetLiked = true; */

  const [show, setShow] = useState(false);

  const handleShowLikes = () => setShow(true);
  const handleClose = () => setShow(false);

  const tweetLiked = tweet.likes.some(
    (like) => like.username === user.username
  );

  // Delete de tweet
  const handleDeleteTweet = async () => {
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "DELETE",
      url: `http://localhost:8000/tweets/${tweet._id}`,
    });
    dispatch(deleteTweet(tweet));
  };

  /* Like Tweet */
  const likeTweet = async () => {
    dispatch(actualize());
    /* dispatch(likeTweet(tweet)) */
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

  return (
    <>
      <LikesModal likes={tweet.likes} show={show} handleClose={handleClose} />
      <div className="d-flex w-100 p-3 border-top border-succes gap-3">
        <Link to={`/${tweet.user.username}`}>
          <img
            style={{ width: "2.5rem", height: "2.3rem", objectFit: "cover" }}
            className="figure-img img-fluid rounded-pill align-self-start"
            alt="img"
            src={
              tweet.user.image.includes("http")
                ? tweet.user.image
                : `${process.env.REACT_APP_API_URL}/img/${tweet.user.image}`
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
                to={`/${tweet.user.username}`}
                className="text-decoration-none text-black fw-semibold mb-0 p-0"
              >
                <div className="d-flex gap-1 align-items-center">
                  {tweet.user.firstname} {tweet.user.lastname}
                  {tweet.user.verify && (
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
                </div>
              </Link>

              <small
                className="p-0 m-0"
                style={{ fontSize: "0.8rem", color: "#969696" }}
              >
                @{tweet.user.username}
              </small>
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
              <div className="d-flex gap-2 aling-items-center">
                {/*               Botón Like */}
                <button
                  onClick={likeTweet}
                  type="submit"
                  className="gap-2 align-items-center border border-white bg-white m-0 p-0 d-flex align-items-center"
                >
                  <img
                    src={
                      tweetLiked
                        ? "https://svgur.com/i/qen.svg" //boton rojo
                        : "https://cdn-icons-png.flaticon.com/512/2961/2961957.png" // boton blanco
                    }
                    className="img-fluid object-fit"
                    style={{ width: "1rem" }}
                    alt="heart-white"
                  />
                </button>
                <div style={{ cursor: "pointer" }} onClick={handleShowLikes}>
                  <h2
                    style={{
                      fontSize: "0.9rem",
                      color: "#000000",
                      fontWeight: "400",
                    }}
                    className="m-0"
                  >
                    {tweet.likes.length}
                  </h2>
                </div>

                {/*               Botón Retweet */}
                {/*   <button
                  onClick={likeTweet}
                  type="submit"
                  className="gap-2 align-items-center border border-white bg-white m-0 p-0 d-flex align-items-center"
                >
                  <img
                    src={
                      tweetLiked
                        ? "https://svgur.com/i/qen.svg" //boton rojo
                        : "https://cdn-icons-png.flaticon.com/512/2961/2961957.png" // boton blanco
                    }
                    className="img-fluid object-fit"
                    style={{ width: "1rem" }}
                    alt="heart-white"
                  />
                  <h2
                    style={{
                      fontSize: "0.9rem",
                      color: "#000000",
                      fontWeight: "400",
                    }}
                    className="m-0"
                  >
                    {tweet.likes.length}
                  </h2>
                </button> */}
              </div>
              {user.username === tweet.user.username && (
                <button
                  type="submit"
                  className="border border-white bg-white m-0 p-0 d-flex align-items-center me-3"
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

export default Tweet;
