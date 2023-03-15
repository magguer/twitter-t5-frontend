import { useSelector } from "react-redux";

function Profile() {
  return (
    <div class="p-0">
      <div>
        <div
          style={{ backgroundColor: "#1d9bf0", height: "10rem", width: "100%" }}
        ></div>
      </div>

      <div style={{ position: "relative", top: "-107px" }}>
        <img
          className="rounded-pill position-relative ms-3 border border-5 border-white"
          style={{
            height: "7rem",
            width: "7rem",
            top: "55px",
            borderStyle: "solid",
            borderColor: "white",
          }}
          src={"https://www.w3schools.com/howto/img_avatar.png"}
          alt="img"
        />
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

          <h3 className="ms-3 mt-3 mb-0">Nombre Apellido</h3>
          <div className="d-flex">
            <div className="ms-3">
              <small style={{ color: "#647788", fontWeight: "400" }}>
                Perfil name
              </small>
            </div>
            <div className="ms-auto d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-1">
                <small style={{ fontWeight: "700", color: "#000000" }}>1</small>
                <button
                  className="text-decoration-none"
                  href=""
                  style={{ color: "#647788" }}
                >
                  Followers
                </button>
                <small style={{ fontWeight: "700", color: "#000000" }}>1</small>
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
          <div class="d-flex w-100 p-3 border-top border-succes border-opacity-50">
            <img
              style={{ width: "2.5rem" }}
              className="figure-img img-fluid rounded-pill align-self-center"
              alt="img"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            />
            <div className="d-flex flex-column w-100">
              <div className="d-flex align-items-center gap-1">
                <a
                  href=""
                  className="text-decoration-none text-black fw-semibold mb-0 p-0"
                >
                  userProfile.firstname userProfile.lastname
                </a>
                <small
                  className="p-0 m-0"
                  style={{ fontSize: "0.8rem", color: "#969696" }}
                >
                  @userProfile.username
                </small>

                <small
                  className="p-0 m-0"
                  style={{ fontSize: "0.8rem", color: "#969696" }}
                >
                  fecha
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
