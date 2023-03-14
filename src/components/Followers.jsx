function Followers() {
  return (
    <>
      <div className="row">
        <div className="col-2 border p-0">
          {/* <%- include("../partials/navbar") %> */}
        </div>
        {/* <!--       Body --> */}
        <div className="col-10 col-lg-7 p-0">
          <div className="px-3 pt-3">
            {/* <!--           Flecha Atrás --> */}
            <div className="d-flex align-items-center mt-4">
              <a
                className="text-decoration-none text-black fs-4"
                href="/usuarios/<%= userFollowers.username %>"
              >
                🡠
              </a>
              <div className="d-flex align-items-start flex-column ms-4">
                <h5 className="mb-0">
                  {/* <%= userFollowers.firstname %> <%= userFollowers.lastname %> */}
                </h5>
                <small>{/* @<%= userFollowers.username %> */}</small>
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-around">
            <div>
              <a className="fs-5 text-black fw-semibold text-decoration-none">
                Followers
              </a>
              <div
                style={{
                  background: "#1d9bf0",
                  width: "100%",
                  height: "4px",
                  marginTop: "8px",
                }}
              ></div>
            </div>
            <div>
              <a
                href="following"
                className="fs-5 text-black fw-semibold text-decoration-none"
              >
                Following
              </a>
            </div>
          </div>
          <div className="d-flex flex-column border-top pt-4">
            {/* <% for (const smallUser of users) { %>
          <!-- comment -->
          <%- include("../partials/smallUser", { smallUser, globalUser }) %>
          <!-- comment -->
          <%}%> */}
          </div>
        </div>
        {/* <!--       More info --> */}
        <div className="col-4 d-none d-lg-block col-lg-3 border p-0">
          {/* <%- include("../partials/moreinfo", { usersInfo, globalUser }) %> */}
        </div>
      </div>
    </>
  );
}

export default Followers;
