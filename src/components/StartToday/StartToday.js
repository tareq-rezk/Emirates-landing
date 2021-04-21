import React from "react";
import classes from "./StartToday.module.css";
import car from "../../assets/images/carVideo.png";
import FormStartToday from "./Form/FormStartToday";
import Form from "./Form/FormStartToday";
function StartToday() {
  return (
    <div className={classes.StartToday}>
      <div className={classes.StartToday_container}>
        <div>
          <h3 className="mainHeading" style={{ color: "#000" }}>
            Start today!
          </h3>
          <h4 className="subHeading" style={{ color: " #595f6f" }}>
            You are just one click away from selling your car.
          </h4>
        </div>

        <div className={classes.StartToday_videoForm}>
          <div className={classes.StartToday_video}>
            <img className="myBg" src={car} alt="" />

            <div className={classes.video_desc}>
              <h5>Why you should sell your car with us?</h5>
              <h6>We support you from start to finish </h6>
              <span className="mainText">
                We have streamlined the process to sell your car online for
                quick payment to get your free cash offer.
              </span>
              <span className="mainText">Ready to sell your car?</span>
            </div>
          </div>
          <div className={classes.StartToday_form}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartToday;
