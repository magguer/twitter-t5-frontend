import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TweetProfile from "../partials/TweetProfile";
import { useDispatch } from "react-redux";
import { actualize } from "../redux/resetSlice";
import { follow, unfollow } from "../redux/userSlice";
import EditProfileModal from "../partials/EditProfileModal";

function Profile() {
  const userNameProfile = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const dispatch = useDispatch();
  const [userFollowing, setUserFollowing] = useState(null);

  useEffect(() => {
    document.title = `Twitter | ${userNameProfile.username}`;
  }, [userNameProfile]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // patch para follow
  const handleFollow = async () => {
    dispatch(follow(userProfile));
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/usuarios/${userProfile._id}/follow`,
    });
  };

  // Llamado de Unfollow
  const handleUnFollow = async () => {
    dispatch(unfollow(userProfile));
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/usuarios/${userProfile._id}/unfollow`,
    });
  };

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios({
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/usuarios/${userNameProfile.username}`,
      });
      setUserProfile(response.data.userProfile);
      setUserFollowing(
        user.userFollowing.some((u) => u.username === userNameProfile.username)
      );
    };
    // console.log(userProfile);
    getProfile();
  }, [userNameProfile, reset]); // eslint-disable-line

  return (
    <>
      {userProfile ? (
        <div className="p-0 m-0">
          <div style={{ position: "absolute" }}>
            <EditProfileModal
              show={show}
              handleClose={handleClose}
              userProfile={userProfile}
            />
          </div>
          {/* Banner Azul como el mar */}
          {userProfile.banner ? (
            <div>
              <img
                src={`${
                  userProfile.banner.includes("http")
                    ? userProfile.banner
                    : `${process.env.REACT_APP_API_URL}/img/${userProfile.banner}`
                }`}
                alt=""
                style={{
                  height: "10rem",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "#1d9bf0",
                height: "10rem",
                width: "100%",
              }}
            ></div>
          )}
          {/* Avatar */}
          <div style={{ position: "relative", top: "-110px" }}>
            <img
              className="rounded-pill position-absolute ms-3 border border-5 border-white"
              style={{
                height: "7rem",
                width: "7rem",
                top: "55px",
                borderStyle: "solid",
                borderColor: "white",
                objectFit: "cover",
              }}
              src={
                userProfile.image.includes("http")
                  ? userProfile.image
                  : `${process.env.REACT_APP_API_URL}/img/${userProfile.image}`
              }
              alt="img"
            />
          </div>
          {/* Info Perfil */}
          <div className="py-3">
            <section id="info-perfil" className="px-3">
              {/* Buttom Profile */}
              <div className="d-flex justify-content-end">
                {userNameProfile.username !== user.userName ? (
                  userFollowing === false ? (
                    <button
                      type="submit"
                      className="btn rounded-pill border"
                      style={{ backgroundColor: "#1d9bf0", color: "white" }}
                      onClick={handleFollow}
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
                      onClick={handleUnFollow}
                    >
                      Following
                    </button>
                  )
                ) : (
                  <button
                    onClick={handleShow}
                    type="submit"
                    className="btn rounded-pill border"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              {/* Nombre, Username y seguidores*/}
              <div className="mt-4">
                <h3 className="ms-3 mb-0">
                  {userProfile.firstname} {userProfile.lastname}
                </h3>
                <div className="d-flex pb-3">
                  <div className="ms-3">
                    <small style={{ color: "#969696", fontWeight: "400" }}>
                      @{userProfile.username}
                    </small>
                    <p className="pe-2 mt-2">{userProfile.description}</p>
                    <div className="ms-auto d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <small style={{ fontWeight: "700", color: "#000000" }}>
                          {userProfile.followers.length}
                        </small>
                        <Link
                          className="text-decoration-none"
                          to={`http://localhost:3000/${userProfile.username}/followers`}
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
                          to={`http://localhost:3000/${userProfile.username}/following`}
                          style={{ color: "#647788" }}
                        >
                          Following
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  TweetsList */}
            <section id="list-tweets">
              <div className="mt-2 ms-3">
                <h4 className="fs-6 ms-2">Tweets</h4>
                <div
                  style={{
                    opacity: "100%",
                    background: "#1d9bf0",
                    width: "70px",
                    height: "4px",
                    marginTop: "8px",
                  }}
                ></div>
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
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Profile;
