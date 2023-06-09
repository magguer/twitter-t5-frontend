import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import MoreInfo from "../partials/MoreInfo";

function Layout({ unavailableFunction }) {
  return (
    <div className="row m-0 overlow">
      <div className="d-none d-sm-block col-2 g-0">
        <Header />
      </div>
      <main className="col-12 col-sm-9 col-md-6 border g-0">
        <Outlet />
      </main>
      <div className="d-none d-md-block col-4 g-0">
        <MoreInfo unavailableFunction={unavailableFunction} />
      </div>
    </div>
  );
}

export default Layout;
