import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Home() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);
  // console.log(user);

  useEffect(() => {
    const getHome = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",

        url: "http://localhost:8000/",
      });
      setTweets(response.data.allTweets);
    };
    getHome();
  }, []);

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
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            />
            <div className="w-100">
              <textarea
                className="form-control"
                placeholder="What's happening?"
                name="newTweet"
                id="newTweet"
                style={{ height: "auto", width: "700px" }}
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
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* A partir de aca para abajo hay que mandar el .map */}
      {/* Imagen del usuario */}
      <div className="d-flex w-100 p-3 border-top border-succes border-opacity-50">
        <img
          style={{ width: "2.5rem" }}
          className="figure-img img-fluid rounded-pill align-self-center"
          alt="img"
          src={"https://www.w3schools.com/howto/img_avatar.png"}
        />

        <div className="d-flex flex-column w-100"></div>
        {/* a partir de aca */}
      </div>
      <div class="d-flex flex-column w-100">
        <div class="d-flex align-items-center gap-1">{/* LINK  usuario */}</div>
        <p className="text-decoration-none text-black fw-semibold mb-0 p-0">
          NOMBRE DE USUARIO
        </p>
        <small
          className="p-0 m-0"
          style={{ fontSize: "0.8rem", color: "#969696" }}
        >
          @userNAme
        </small>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          neque excepturi quam voluptas quis deserunt?
        </p>
        <div>
          <i class="bi bi-heart"></i>;<i class="bi bi-trash"></i>
        </div>
      </div>
      <h2>HOME</h2>
      {tweets.map((tweet) => (
        <h2 key={tweet.id}>{tweet.text}</h2>
      ))}
    </div>
  );
}

export default Home;
