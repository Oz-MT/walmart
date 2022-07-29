import cardImage from "../../assets/small-icons/card.png";
import creditCardStyle from "./creditCardStyle.module.css";

import React from "react";

const CreditCardbar = () => {
  return (
    <div className={creditCardStyle["main-container"]}>
      <p>
        <img src={cardImage} alt="card" />
        <span className={creditCardStyle["text1"]}>Earn 5% cash back</span> on
        Wallmart.com
        <span className={creditCardStyle["text2"]}>
          <a href="/">Learn how</a>
        </span>
      </p>
    </div>
  );
};

export default CreditCardbar;
