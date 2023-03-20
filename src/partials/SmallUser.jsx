import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { actualize } from "../redux/resetSlice";
import { follow, unfollow } from "../redux/userSlice";

function SmallUser({ smallUser }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Llamado de Follow
  const getFollow = async () => {
    dispatch(follow(smallUser));
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/usuarios/${smallUser._id}/follow`,
    });
  };

  // Llamado de Unfollow
  const getUnFollow = async () => {
    dispatch(unfollow(smallUser));
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/usuarios/${smallUser._id}/unfollow`,
    });
  };

  return (
    <>
      {smallUser ? (
        <>
          <div className="d-flex w-100 align-items-center px-4 py-2">
            {/* Info Usuario */}
            <div className="d-flex align-items-center gap-3 w-100">
              {/* Imagen Usuario */}
              <Link to={`/${smallUser.username}`}>
                <img
                  style={{ width: "2.5rem" }}
                  className="figure-img img-fluid rounded-pill align-self-center"
                  alt="images"
                  src={
                    smallUser.image.includes("http")
                      ? smallUser.image
                      : `${process.env.REACT_APP_API_URL}/img/${smallUser.image}`
                  }
                />
              </Link>
              {/* Desc. Usuario */}
              <div>
                <Link
                  to={`/${smallUser.username}`}
                  className="text-decoration-none text-black"
                >
                  <h6 className="mb-0 p-0">
                    {smallUser.firstname} {smallUser.lastname}
                  </h6>
                </Link>
                <p
                  className="p-0 m-0"
                  style={{ fontSize: "0.8rem", color: "#969696" }}
                >
                  @{smallUser.username}
                </p>
              </div>
            </div>
            {/*  user.userFollowing.some((u) => u._id === smallUser._id) */}
            {!user.following.some((u) => u._id === smallUser._id) ? (
              <div className="justify-content-end">
                <button
                  onClick={getFollow}
                  type="submit"
                  className="btn rounded-pill"
                  style={{ backgroundColor: "#1d9bf0", color: "white" }}
                >
                  Follow
                </button>
              </div>
            ) : (
              /*  Si el usuario ya lo sigue, mostrar el boton de unfollow */
              <div className="justify-content-end">
                <button
                  onClick={getUnFollow}
                  type="submit"
                  className="btn rounded-pill border"
                  style={{ backgroundColor: "#ffffff", color: "rgb(0, 0, 0)" }}
                >
                  Following
                </button>
              </div>
              /* )} */
            )}
          </div>
        </>
      ) : null}
    </>
  );
}

export default SmallUser;
