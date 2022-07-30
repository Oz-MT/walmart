import React from "react";
import pharmacy from "../../assets/small-circle-btn/pharmacy.png";
import autocare from "../../assets/small-circle-btn/autocare.png";
import cakes from "../../assets/small-circle-btn/cakes.png";
import smlCircleLeft from "./smallCircleBtnLeft.module.css";

const SmallCircleLeft = () => {
  return (
    <div className={smlCircleLeft["s-c-left"]}>
      <div className={smlCircleLeft["left-top"]}>
        <h5>Pickup and delivery</h5>
        <button>See times</button>
      </div>
      <div className={smlCircleLeft["left-medium"]}></div>
      <div className={smlCircleLeft["left-bottom"]}>
        <div className={smlCircleLeft["left-bottom-title"]}>
          <h5>Popular services</h5>
          <a href="/">View all</a>
        </div>
        <div className={smlCircleLeft["left-bottom-circle"]}>
          <div className={smlCircleLeft["circle-text"]}>
            <img src={pharmacy} alt="" />
            <p>Pharmacy</p>
          </div>
          <div className={smlCircleLeft["circle-text"]}>
            <img src={autocare} alt="" />
            <p>Auto Care Center </p>
          </div>
          <div className={smlCircleLeft["circle-text"]}>
            <img src={cakes} alt="" />
            <p>Custom Cakes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCircleLeft;
