import { Link, useNavigate } from "react-router-dom";

function HeaderFollow({ userProfile }) {
  const navigate = useNavigate();

  return (
    <div className="col-10 col-lg-7 p-0 w-100">
      <div className="px-3 pt-3">
        {/* <!--           Flecha Atrás --> */}
        <div className="d-flex align-items-center mt-4">
          <Link to={`/${userProfile.username}`} className="btn text-black fs-4">
            🡠
          </Link>
          <div className="d-flex align-items-start flex-column ms-4">
            <h5 className="mb-0">
              {userProfile.firstname} {userProfile.lastname}
            </h5>
            <small style={{ color: "#969696" }}>@{userProfile.username}</small>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-around">
        <div>
          <Link
            to={`/${userProfile.username}/followers`}
            className="btn fs-5 text-black fw-semibold text-decoration-none"
          >
            Followers
          </Link>
        </div>
        <div>
          <Link
            to={`/${userProfile.username}/following`}
            className="btn fs-5 text-black fw-semibold text-decoration-none"
          >
            Followings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderFollow;
