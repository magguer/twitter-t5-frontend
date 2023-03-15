import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import MoreInfo from "../partials/MoreInfo";

function Layout() {
  return (
    <div className="row m-0">
      <div className="col-2 g-0">
        <Header />
      </div>
      <main className="col-6 border g-0">
        <Outlet />
      </main>
      <div className="col-4 g-0">
        <MoreInfo />
      </div>
    </div>
  );
}

export default Layout;
