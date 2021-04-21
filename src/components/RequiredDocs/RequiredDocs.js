import React from "react";
import classes from "./RequiredDocs.module.css";
function RequiredDocs() {
  return (
    <div className={classes.RequiredDocs}>
      <h3 className="mainHeading" style={{ color: "#000000" }}>
        Required Documentation
      </h3>
      <div className={classes.docs_info}>
        <span>Emirates ID</span>
        <small>
          Possession certificate
          <br />
          (Dubai certificate or transfer to Dubai){" "}
        </small>
        <span>Bank account details</span>
      </div>
    </div>
  );
}

export default RequiredDocs;
