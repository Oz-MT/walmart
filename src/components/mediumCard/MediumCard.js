import mediumCardStyle from "../mediumCard/mediumCard.module.css";

const MediumCard = ({ item }) => {
  return (
    <div className={mediumCardStyle["main-container"]}>
      <img src={item.img} alt={item.title} />
      <div className={mediumCardStyle["card-text"]}>
        <h5>{item.title}</h5>
        <p>{item.desc}</p>
        <button>{item.btnName}</button>
      </div>
    </div>
  );
};

export default MediumCard;
