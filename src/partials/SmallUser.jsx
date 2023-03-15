import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { actualize } from "../redux/resetSlice";

function SmallUser({ smallUser }) {
  const user = useSelector((state) => state.user);
  const reset = useSelector((state) => state.reset);
  const dispatch = useDispatch();

  const [usersStateFollowing, setUsersStateFollowing] = useState([]);

  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios.get(
        `http://localhost:8000/usuarios/${user.userName}/following`
      );
      setUsersStateFollowing(response.data.usersFollowing);
    };
    getFollowing();
  }, [reset]); // eslint-disable-line

  const userFollowing = usersStateFollowing.some(
    (u) => u._id === smallUser._id
  );

  //Llamado de Follow
  const getFollow = async () => {
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "put",
      url: `http://localhost:8000/usuarios/${smallUser._id}/follow`,
    });
  };

  // Llamado de Unfollow
  const getUnFollow = async () => {
    dispatch(actualize());
    await axios({
      headers: {
        Authorization: `Bearer ${user.userToken}`,
      },
      method: "put",
      url: `http://localhost:8000/usuarios/${smallUser._id}/unfollow`,
    });
  };

  return (
    <>
      <div className="d-flex w-100 align-items-center px-4 py-2">
        {/* Info Usuario */}
        <div className="d-flex align-items-center gap-3 w-100">
          {/* Imagen Usuario */}
          <Link to={`/:username/${smallUser.username}`}>
            {smallUser.image.includes("http") ? (
              <img
                style={{ width: "2.5rem" }}
                className="figure-img img-fluid rounded-pill align-self-center"
                alt="image"
                src={smallUser.image}
              />
            ) : (
              <img
                style={{ width: "2.5rem" }}
                className="figure-img img-fluid rounded-pill align-self-center"
                alt="image"
                src={`/img/${smallUser.image}`}
              />
            )}
          </Link>
          {/* Desc. Usuario */}
          <div>
            <Link className="text-decoration-none text-black">
              {" "}
              {/* to={`/usuarios/${smallUser.username}`} */}
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
        {/* { smallUser.id !== user.id  (  */}
        {!userFollowing ? (
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
              Unfollow
            </button>
          </div>
          /* )} */
        )}
      </div>
    </>
  );
}

export default SmallUser;
