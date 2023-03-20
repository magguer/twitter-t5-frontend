import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { postTweet } from "../redux/tweetsSlice";
import { actualize } from "../redux/resetSlice";

function TweetModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState("");
  const user = useSelector((state) => state.user);

  // POST TWEET
  const handleTweet = async (e) => {
    if (tweet !== "") {
      e.preventDefault();
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/tweets/`,
        data: { tweet: tweet },
      });
      dispatch(postTweet(response.data));
      dispatch(actualize());
    }
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2 className="text-center" style={{ fontSize: "1.2rem" }}>
            Post Your Tweet 😉{" "}
          </h2>
        </Modal.Title>
      </Modal.Header>
      <div className="p-4">
        <form>
          <div className="d-flex">
            <div className="me-2">
              <img
                style={{ width: "4rem", height: "3.5rem", objectFit: "cover" }}
                className="figure-img img-fluid rounded-pill align-self-start"
                alt="images"
                src={
                  user.image.includes("http")
                    ? user.image
                    : `${process.env.REACT_APP_API_URL}/img/${user.image}`
                }
              />
            </div>
            <div className="w-100">
              <textarea
                className="form-control"
                placeholder="What's happening?"
                name="newTweet"
                id="newTweet"
                style={{ height: "130px" }}
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn text-light"
              type="submit"
              style={{
                borderRadius: "45px",
                backgroundColor: "#1d9bf0",
                height: "40px",
              }}
              onClick={handleTweet}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default TweetModal;
