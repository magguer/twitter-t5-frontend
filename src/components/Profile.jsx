import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Tweet from "../partials/Tweet";

function Profile() {
  const userNameProfile = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const user = useSelector((state) => state.user);

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
    };
    getProfile();
  }, []); // eslint-disable-line
  //console.log(userProfile);

  return (
    <div class="p-0">
      <div>
        <div
          style={{ backgroundColor: "#1d9bf0", height: "10rem", width: "100%" }}
        ></div>
      </div>
      <div style={{ position: "relative", top: "-107px" }}>
        {userProfile ? (
          <img
            className="rounded-pill position-relative ms-3 border border-5 border-white"
            style={{
              height: "7rem",
              width: "7rem",
              top: "55px",
              borderStyle: "solid",
              borderColor: "white",
            }}
            src={userProfile.image}
            alt="img"
          />
        ) : null}
      </div>
      <div class="p-3">
        <div className="justify-content-end">
          <div className="d-flex justify-content-end mt-5">
            <button
              type="submit"
              class="btn rounded-pill border"
              style={{ backgroundColor: "#ffffff", color: "rgb(0, 0, 0)" }}
            >
              Your Profile
            </button>
          </div>
          {userProfile ? (
            <h3 className="ms-3 mt-3 mb-0">
              {userProfile.firstname} {userProfile.lastname}
            </h3>
          ) : null}
          <div className="d-flex">
            <div className="ms-3">
              {userProfile ? (
                <small style={{ color: "#647788", fontWeight: "400" }}>
                  {userProfile.username}
                </small>
              ) : null}
            </div>
            <div className="ms-auto d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-1">
                {userProfile ? (
                  <small style={{ fontWeight: "700", color: "#000000" }}>
                    {userProfile.followers.length}
                  </small>
                ) : null}
                <button
                  className="text-decoration-none"
                  href=""
                  style={{ color: "#647788" }}
                >
                  Followers
                </button>

                {userProfile ? (
                  <small style={{ fontWeight: "700", color: "#000000" }}>
                    {userProfile.following.length}
                  </small>
                ) : null}
                <button
                  className="text-decoration-none"
                  href=""
                  style={{ color: "#647788" }}
                >
                  Following
                </button>
              </div>
            </div>
          </div>

          {userProfile
            ? userProfile.tweets.map((tweet) => <Tweet tweet={tweet} />)
            : null}
        </div>
      </div>
    </div>
  );
}
export default Profile;
