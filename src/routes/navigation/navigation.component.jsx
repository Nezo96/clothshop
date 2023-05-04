import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <div>Logo</div>
        </NavLink>
        <div className="nav-links-constainer">
          <NavLink className="nav-link" to="/shop">
            SHOP
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
