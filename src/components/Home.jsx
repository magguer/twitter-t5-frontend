import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { actualize } from "../redux/resetSlice";
import Tweet from "../partials/Tweet";

function Home() {
  const [tweets, setTweets] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const [tweet, setTweet] = useState("");

  //Get de tweets
  useEffect(() => {
    const getHome = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/tweets/`,
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
      url: "${process.env.REACT_APP_API_URL}/tweets/",
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
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
}

export default Home;
