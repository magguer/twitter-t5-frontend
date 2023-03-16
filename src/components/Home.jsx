import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { actualize } from "../redux/resetSlice";

function Home() {
  const [tweets, setTweets] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const [tweet, setTweet] = useState("");

  console.log(user);

  //Get de tweets
  useEffect(() => {
    const getHome = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",

        url: "http://localhost:8000/tweets/",
      });
      setTweets(response.data.tweets);
    };
    getHome();
  }, [reset]);

  // Post de tweet
  const handleTweet = async (e) => {
    dispatch(actualize());
    e.preventDefault();
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "POST",

      url: "http://localhost:8000/tweets/",
      data: { tweet: tweet },
    });
  };

  return (
    <div>
      <h5 class="my-4">Home</h5>
      <form>
        <div className="d-flex">
          <div className="me-3">
            <img
              style={{
                width: "4rem",

                objectFit: " cover",
                borderRadius: "100%",
              }}
              className="figure-img img-fluid align-self-center"
              alt="img"
              src={user.userImage}
            />
            <div className="w-100">
              <textarea
                className="form-control"
                placeholder="What's happening?"
                name="newTweet"
                id="newTweet"
                style={{ height: "100px" }}
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex justify-content-end my-3">
              <button
                className="btn text-light"
                type="submit"
                style={{
                  borderRadius: "45px",
                  backgroundColor: "#1d9bf0",
                }}
                onClick={handleTweet}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* A partir de aca para abajo hay que mandar el .map */}
      {/* Imagen del usuario */}
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <div className="d-flex w-100 p-3 border-top border-succes border-opacity-50">
            <img
              style={{ width: "2.5rem" }}
              className="figure-img img-fluid rounded-pill align-self-center"
              alt="img"
              src={tweet.user.image}
            />

            <div className="d-flex flex-column w-100"></div>
            {/* a partir de aca */}
          </div>
          <div class="d-flex flex-column w-100">
            <div class="d-flex align-items-center gap-1">
              {/* LINK  usuario */}
            </div>
            <p className="text-decoration-none text-black fw-semibold mb-0 p-0">
              {tweet.user.firstname} {tweet.user.lastname}
            </p>
            <small
              className="p-0 m-0"
              style={{ fontSize: "0.8rem", color: "#969696" }}
            >
              @{tweet.user.username}
            </small>
            <p>{tweet.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
