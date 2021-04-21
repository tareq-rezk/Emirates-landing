import React from "react";
import MainBtn from "../MainBtn/MainBtn";
import AnsItem from "./AnsItem";
import classes from "./MainSection.module.css";
import auction from "../../assets/images/icon.png";

function MainSection() {
  const answers = [
    {
      id: 1,
      head: "Submit Your Car",
      desc: "Enter your car details for inspection on Emirates Auction.",
    },
    {
      id: 2,
      head: "Receive Valuation and Offer",
      desc:
        "We will check your car and provide you with approved purchase price.",
    },
    {
      id: 3,
      head: "Get Your Payment",
      desc:
        "After a price is agreed for your car, we will exchange cash on a day that suits you.",
    },
  ];
  return (
    <>
      <main>
        <div className={classes.header}>
          <div className={classes.header_desc}>
            <h3 className="mainHeading">Selling Your Car Now</h3>
            <h4 className="subHeading">Is Easier than ever.</h4>
          </div>
          <div className={classes.header_btn}>
            <MainBtn text="Start Today" arrow={true} />
          </div>
        </div>
        <section className={classes.H_Works}>
          <div className={classes.Works_Answer}>
            <div className={classes.Answer_Head}>
              <h3 className="mainHeading">How it works?</h3>
              <h4 className="subHeading">
                Sell Your Car in Three Simple Steps
              </h4>
            </div>
            <div className={classes.Answer_content}>
              {answers.map((item, index) => (
                <AnsItem
                  key={item.id}
                  head={item.head}
                  desc={item.desc}
                  number={index}
                />
              ))}
            </div>
          </div>
          <div className={classes.Works_img}>
            <img src={auction} alt="auction" />
            <h3 className="mainHeading">Your car will be sold by bidding</h3>
            <h4 className="subHeading">
              You set the starting price it will be sold for the highest bidder
            </h4>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainSection;
