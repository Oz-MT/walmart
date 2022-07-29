import React from "react";
import circleMR from "./smallCircleMR.module.css";

const SmallCircleMR = ({ item }) => {
  return (
    <div className={circleMR["MR"]}>
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default SmallCircleMR;
