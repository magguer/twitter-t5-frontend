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
        url: `${process.env.REACT_APP_API_URL}/tweets`,
      });
      setTweets(response.data.tweets);
    };
    getHome();
  }, [reset]);

  // Post de tweet
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
  };

  return (
    <div>
      {/*       Tweet Form */}
      <form className="m-3">
        <h5 class="my-4">Home</h5>
        <div className="me-3 d-flex gap-3">
          <img
            style={{ width: "4rem" }}
            className="figure-img img-fluid rounded-pill align-self-start"
            alt="image"
            src={
              user.userImage.includes("http")
                ? user.userImage
                : `${process.env.REACT_APP_API_URL}/img/${user.userImage}`
            }
          />
          <div className="w-100 d-flex flex-column align-items-end gap-3">
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
      <div>
        {tweets.map((tweet) => (
          <Tweet tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Home;
