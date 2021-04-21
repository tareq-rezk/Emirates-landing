import React from "react";
import classes from "./OurServices.module.css";
import time from "../../assets/images/time.png";
import star from "../../assets/images/star.png";

import doc from "../../assets/images/documents icon.png";

function OurServices() {
  return (
    <div className={classes.OurServices}>
      <div className={classes.OurServices_wrap}>
        <div className={classes.OurServices_heading}>
          <h2 className="mainHeading" style={{ color: "#000000" }}>
            Why use our services?
          </h2>
          <p>
            We operates 24 hour/7 day-a-week telephone, email & remote support
            services that is staffed to handle any issue or question{" "}
          </p>
        </div>
        <div className={classes.services}>
          <div className={classes.ServiceItem}>
            <div className={classes.itemContent}>
              <img src={time} alt="" />
              <div className={classes.item_text}>
                <span className="mainText">Easy Process</span>
                <span className="subText">
                  We help you save time and effort. We master how to sell a car
                  privately and have simplified the process of selling a vehicle
                  to make it hassle-free.
                </span>
              </div>
            </div>
          </div>
          <div className={classes.ServiceItem}>
            <div className={classes.itemContent}>
              <img src={star} alt="" />
              <div className={classes.item_text}>
                <span className="mainText">Get The Best Return</span>
                <span className="subText">
                  Get the most money for your car. Reach serious buyers. Avoid
                  lowball offers. Use our valuation tools for a better price
                  when selling your car.
                </span>
              </div>
            </div>
          </div>
          <div className={classes.ServiceItem}>
            <div className={classes.itemContent}>
              <img src={doc} alt="" />
              <div className={classes.item_text}>
                <span className="mainText">Dedicated Team</span>
                <span className="subText">
                  Our seller experts are here to help you at every step of the
                  way via email, phone, or chat all the week days! They help you
                  find real buyers for your car and finalize your deal fast.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurServices;
