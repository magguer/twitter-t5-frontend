import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { actualize } from "../redux/resetSlice";

function TweetModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState("");
  const user = useSelector((state) => state.user);

  // POST TWEET
  const handleTweet = async (e) => {
    if (tweet !== "") {
      dispatch(actualize());
      e.preventDefault();
      await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/tweets/`,
        data: { tweet: tweet },
      });
    }
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      handleClose={handleClose}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h2 className="text-center">Post Your Tweet 😉 </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="d-flex">
            <div className="me-2">
              <img
                style={{ width: "4rem" }}
                className="figure-img img-fluid rounded-pill align-self-start"
                alt="images"
                src={
                  user.userImage.includes("http")
                    ? user.userImage
                    : `${process.env.REACT_APP_API_URL}/img/${user.userImage}`
                }
              />
            </div>
            <div className="w-100">
              <textarea
                className="form-control"
                placeholder="What's happening?"
                name="newTweet"
                id="newTweet"
                style={{ height: "100px" }}
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            {/* <Button
              className="btn text-light ms-2"
              style={{
                borderRadius: "45px",
                backgroundColor: "#1d9bf0",
                height: "40px",
              }}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button> */}
            <Button
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
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TweetModal;