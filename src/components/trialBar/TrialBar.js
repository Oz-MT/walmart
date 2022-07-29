import trialBarStyle from "./trialBarStyle.module.css";
import trialBar from "../../assets/trialBar.svg";
import walmartIcon from "../../assets/small-icons/walmartIcon.svg";

const TrialBar = () => {
  return (
    <div className={trialBarStyle["main-container"]}>
      <img src={trialBar} alt="" />
      <p>
        <img src={walmartIcon} alt="" />
        <span>
          Members get free shipping* with no order minimum! *Restrictions apply.
        </span>
        <a href="/">Try free 30-day trial</a>
      </p>
    </div>
  );
};

export default TrialBar;
