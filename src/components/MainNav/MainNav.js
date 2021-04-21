import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import classes from "./mainNav.module.css";

import logo from "../../assets/images/Logo.png";

function MainNav() {
  return (
    <>
      <nav className={classes.MainNav}>
        <div className={classes.nav_content}>
          <img src={logo} alt="" />
          <MainBtn text="العربية" />
        </div>
      </nav>
    </>
  );
}

export default MainNav;
