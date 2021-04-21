import React from "react";
import classes from "./MainBtn.module.css";
import arow from "../../assets/images/White Arrow.png";

function MainBtn(props) {
  const { text, arrow } = props;
  return (
    <div className={classes.mainBtn}>
      <span>{text}</span>
      {arrow ? <img src={arow} alt="arrow" /> : null}
    </div>
  );
}

export default MainBtn;
