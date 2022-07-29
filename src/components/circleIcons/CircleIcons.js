import circleIconsStyle from "./circleIcons.module.css";

const CircleIcons = ({ item }) => {
  return (
    <div className={circleIconsStyle["container"]}>
      <img src={item.img} alt="" />
      <p>{item.title}</p>
    </div>
  );
};

export default CircleIcons;
