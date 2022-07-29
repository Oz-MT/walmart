import productCard from "./productCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={productCard["container"]}>
      <img src={item.img} alt="" />
      <button>{item.btnName}</button>
      <h4>{item.price}</h4>
      <p>{item.title}</p>
    </div>
  );
};

export default ProductCard;
