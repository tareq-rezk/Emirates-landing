import React from "react";
import classes from "./RequiredProcedures.module.css";

function RequiredProcedures() {
  return (
    <div className={classes.RequiredProcedures}>
      <div className={classes.Procedures_wrap}>
        <div className={classes.Procedures_heading}>
          <h2 className="mainHeading" style={{ color: "#000000" }}>
            Get prepared before our call
          </h2>
          <p>Required Documents & Procedures</p>
        </div>
        <div className={classes.Procedure_lists}>
          <ul>
            <li>
              <span className={classes.bolet}></span>
              <span>
                If the item is sold, the check will be deposit in your bank
                account after 10 working days from the time of auction’s
                conclusion
              </span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>The car must be brought in good working condition</span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>
                If the item is sold, the check will be deposit in your bank
                account after 10 working days from the time of auction’s
                conclusion
              </span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>The car must be brought in good working condition</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className={classes.bolet}></span>
              <span>The car must be brought in good working condition</span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>
                If the item is sold, the check will be deposit in your bank
                account after 10 working days from the time of auction’s
                conclusion
              </span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>The car must be brought in good working condition</span>
            </li>
            <li>
              <span className={classes.bolet}></span>
              <span>The car must be brought in good working condition</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RequiredProcedures;
