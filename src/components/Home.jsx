import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTweets, postTweet } from "../redux/tweetsSlice";
import Tweet from "../partials/Tweet";

function Home({ unavailableFunction }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const tweets = useSelector((state) => state.tweets);
  const [tweet, setTweet] = useState("");

  useEffect(() => {
    document.title = `Twitter | Home`;
  }, []);

  //Get de tweets
  useEffect(() => {
    const getHome = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/tweets`,
      });
      dispatch(getTweets(response.data.tweets));
    };
    getHome();
  }, [reset]); // eslint-disable-line

  // Post de tweet
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
    }
    setTweet("");
  };

  return (
    <div className="container-fliud">
      {/*       Tweet Form */}
      <form className="m-3">
        <h5 className="my-4">Home</h5>
        <div className="me-3 d-flex gap-3">
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
          <div className="w-100 d-flex flex-column align-items-end gap-3">
            <div className="w-100">
              <textarea
                className="form-control"
                placeholder="What's happening?"
                name="newTweet" // tweetSlice
                id="newTweet"
                style={{ height: "100px" }}
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
              />
            </div>
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
        </div>
      </form>
      {/*       Tweets List */}
      {tweets ? (
        <div>
          {tweets.map((tweet, i) => (
            <Tweet
              unavailableFunction={unavailableFunction}
              key={i}
              tweet={tweet}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
