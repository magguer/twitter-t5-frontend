import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);

  const userFollowing = user.userFollowing.some(
    (following) => following.id === user.userId
  );

  return (
    <body>
      <div className="col-10 col-lg-7 p-0">
        <div>
          {/* <%if (user.username === userProfile.username){%> */}
          <form action="/usuarios/banner?_method=put" method="post">
            <div
              style={{ position: "absolute", width: "60px; height: 60px" }}
              className="p-3"
            >
              <h3 style="position: absolute; z-index: 0">✒</h3>
              <input
                style={{ opacity: "0", position: "absolute", zIndex: "1" }}
                className="form-control"
                name="banner"
                id="banner"
                type="file"
              />
            </div>
            {/* !--     <button type="submit" className="btn btn-succes">Cambiar</button>  */}
          </form>
          {/* <%}%> <% if(!userProfile.banner){ %> */}
          <div
            style={{
              backgroundColor: "#1d9bf0",
              height: "10rem",
              width: "100%",
            }}
          ></div>
          {/* <% } else { %> */}
          <img
            src="<%= userProfile.banner %>"
            style={{ width: "100%", objectFit: "cover", height: "10rem" }}
          />
          {/* <% } %> */}
        </div>
        <div style={{ position: "relative", top: "-107px" }}>
          {/* <% if (userProfile.image.includes("http")) { %> */}
          <img
            className="rounded-pill position-relative ms-3 border border-5 border-white"
            style={{
              height: "7 rem",
              width: "7 rem",
              top: "55px",
              borderStyle: "solid",
              borderColor: "white",
            }}
            src="<%= userProfile.image %>"
            alt="Gato"
          />
          {/* <% } else {%> */}
          <img
            className="rounded-pill position-relative ms-3 border border-5 border-white"
            style={{
              width: "7rem",
              height: "7rem",
              top: "55px",
              borderStyle: "solid",
              borderColor: "white",
              objectFit: "cover",
            }}
            src="/img/<%= userProfile.image %>"
            alt="Gato"
          />
          {/* <%}%> */}

          {/*   <!--         User Info --> */}

          <div className="p-3">
            {/*  <% if ( userProfile.id !== globalUser.id) { %>
         
          <%if (!userFollowing) { %> */}
            <div className="justify-content-end">
              <form
                action="/usuarios/<%= userProfile._id%>/follow?_method=put"
                method="post"
              >
                <div className="d-flex justify-content-end mt-5">
                  <button
                    className="btn text-light rounded-pill"
                    type="submit"
                    style={{ backgroundColor: "#1d9bf0" }}
                  >
                    Follow
                  </button>
                </div>
              </form>
            </div>
            {/* <% } else { %> */}
            <div className="justify-content-end">
              <form
                action="/usuarios/<%= userProfile._id%>/unfollow?_method=put"
                method="post"
              >
                <div className="d-flex justify-content-end mt-5">
                  <button
                    type="submit"
                    className="btn rounded-pill border"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "rgb(0, 0, 0)",
                    }}
                  >
                    Unfollow
                  </button>
                </div>
              </form>
            </div>
            {/*  <% } %>
      
          <% } else { %> */}
            <div className="justify-content-end">
              <div className="d-flex justify-content-end mt-5">
                <button
                  type="submit"
                  className="btn rounded-pill border"
                  style={{ backgroundColor: "#ffffff", color: "rgb(0, 0, 0)" }}
                >
                  Your Profile
                </button>
              </div>
            </div>
            {/*  } */}

            <h3 className="ms-3 mt-3 mb-0">
              {user.userFirstName} {user.userLastName}
            </h3>
            <div className="d-flex">
              <div className="ms-3">
                <small style={{ color: "#647788", fontWeight: "400" }}>
                  @{user.userName}
                </small>
              </div>
              <div className="ms-auto d-flex align-items-center gap-3">
                <div className="d-flex align-items-center gap-1">
                  <small style={{ fontWeight: "700", color: "#00000" }}>
                    {user.userFollowers.length}
                  </small>
                  <a
                    className="text-decoration-none"
                    href="/usuarios/<%=userProfile.username%>/followers"
                    role="button"
                    style={{ color: "#647788" }}
                  >
                    Followers
                  </a>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <small style={{ color: "#000000", fontWeight: "700" }}>
                    {user.userFollowing.length}
                  </small>
                  <a
                    className="text-decoration-none"
                    href="/usuarios/<%=userProfile.username%>/following"
                    role="button"
                    style={{ color: "#647788" }}
                  >
                    Following
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <h6 className="ms-3 mt-3 fs-5 fw-semibold">Tweets</h6>
            <div
              className="ms-3"
              style={{
                backgroundColor: "#1d9bf0",
                width: "3.9rem",
                height: "4px",
              }}
            ></div>
          </div>
          {/*  <% for (const tweet of userProfile.tweets) { */}

          {/*   <%- include("../partials/tweetProfile", { tweet }) */}

          {/*  <% } %> */}
        </div>
      </div>
    </body>
  );
}

export default Profile;
