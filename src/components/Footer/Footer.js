import React from "react";
import classes from "./footer.module.css";
import logo from "../../assets/images/Logo.png";
import socials from "../../assets/images/Logos.png";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.footer_info}>
        <div className={classes.logo_info}>
          <img src={logo} alt="" />
          <span className="subText" style={{ color: "#595f6f" }}>
            Buy new and used cars in UAE, shipping and delivery service are
            available, Sell your car at the highest price online with no worries
            visiting cars show rooms.
          </span>
        </div>
        <div className={classes.logo_info}>
          <span className="subText" style={{ color: "#000" }}>
            Follow the first and the largest online auction in UAE and Middle
            East
          </span>
          <div className={classes.socials_icons}>
            <img src={socials} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
