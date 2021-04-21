import React from "react";
import classes from "./AnsItem.module.css";

function AnsItem(props) {
  const { head, desc, number } = props;
  return (
    <div className={classes.AnsItem}>
      <span className={classes.number}>{number}</span>
      <div className={classes.ansContent}>
        <span className="mainText">{head}</span>
        <span className="subText">{desc}</span>
      </div>
    </div>
  );
}

export default AnsItem;
