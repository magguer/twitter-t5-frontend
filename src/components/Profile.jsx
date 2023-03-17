import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TweetProfile from "../partials/TweetProfile";

function Profile() {
  const userNameProfile = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const [userFollowing, setUserFollowing] = useState(null);

  /*  const userFollowing = true; */

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",
        url: `http://localhost:8000/usuarios/${userNameProfile.username}`,
      });
      setUserProfile(response.data.userProfile);
      setUserFollowing(
        user.userFollowing.some((u) => u.username === userNameProfile.username)
      );
    };
    console.log(userFollowing);
    getProfile();
  }, [userNameProfile, reset]); // eslint-disable-line

  return (
    <>
      {userProfile ? (
        <div className="p-0 m-0">
          {/* Div Banner Azul como el mar */}
          <div
            style={{
              backgroundColor: "#1d9bf0",
              height: "10rem",
              width: "100%",
            }}
          ></div>
          {/* Div IMG */}
          <div style={{ position: "relative", top: "-110px" }}>
            <img
              className="rounded-pill position-absolute ms-3 border border-5 border-white"
              style={{
                height: "7rem",
                width: "7rem",
                top: "55px",
                borderStyle: "solid",
                borderColor: "white",
              }}
              src={
                userProfile.image.includes("http")
                  ? userProfile.image
                  : `${process.env.REACT_APP_API_URL}/img/${userProfile.image}`
              }
              alt="img"
            />
          </div>

          {/* Div PADRE DE LOS TWEET */}
          <div className="p-3">
            {/* Buttom Profile */}
            <div className="d-flex justify-content-end">
              {userNameProfile.username !== user.userName ? (
                userFollowing === false ? (
                  <button
                    type="submit"
                    className="btn rounded-pill border"
                    style={{ backgroundColor: "#1d9bf0", color: "white" }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn rounded-pill border"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Following
                  </button>
                )
              ) : (
                <button
                  type="submit"
                  className="btn rounded-pill border"
                  style={{ backgroundColor: "#ffffff", color: "rgb(0, 0, 0)" }}
                >
                  Your Profile
                </button>
              )}
            </div>
            <div className="mt-4">
              <h3 className="ms-3 mb-0">
                {userProfile.firstname} {userProfile.lastname}
              </h3>
              <div className="d-flex pb-3">
                <div className="ms-3">
                  <small style={{ color: "#969696", fontWeight: "400" }}>
                    @{userProfile.username}
                  </small>
                </div>
                <div className="ms-auto d-flex align-items-center gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <small style={{ fontWeight: "700", color: "#000000" }}>
                      {userProfile.followers.length}
                    </small>
                    <Link
                      className="text-decoration-none"
                      to={`http://localhost:3000/${userProfile.username}/follows`}
                      style={{ color: "#647788" }}
                    >
                      Followers
                    </Link>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <small style={{ fontWeight: "700", color: "#000000" }}>
                      {userProfile.following.length}
                    </small>
                    <Link
                      className="text-decoration-none"
                      to={`http://localhost:3000/${userProfile.username}/follows`}
                      style={{ color: "#647788" }}
                    >
                      Following
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {userProfile
              ? userProfile.tweets.map((tweet, i) => (
                  <TweetProfile
                    key={i}
                    tweet={tweet}
                    userProfile={userProfile}
                  />
                ))
              : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Profile;
