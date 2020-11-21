import React, { Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          <NavLink className="nav-link active" to="/" exact>
            To Do List
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About me
          </NavLink>
        </div>
      </nav>
    </Fragment>
  );
};

export default withRouter(Nav);
