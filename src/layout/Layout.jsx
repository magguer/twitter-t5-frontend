import React from "react";
import Header from "../partials/Header";
import MoreInfo from "../partials/MoreInfo";

function Layout({ children }) {
  return (
    <div className="d-flex">
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <MoreInfo />
      </div>
    </div>
  );
}

export default Layout;
