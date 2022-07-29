import React from "react";
import ProductCard from "../productCard/ProductCard";
import carouselStyle from "../carousel/carousel.module.css";

const Carousel = ({ data, id }) => {
  return (
    <div className={carouselStyle["product-card-cont"]}>
      <div
        id={id}
        className=" carousel slide carousel-dark"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active  ">
            <div className={carouselStyle["product-card"]}>
              {data
                ?.map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })
                .slice(0, 6)}
            </div>
          </div>
          <div className="carousel-item">
            <div className={carouselStyle["product-card"]}>
              {data
                ?.map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })
                .slice(6)}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev carousel-button"
          type="button"
          data-bs-target={`${"#" + id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-button"
          type="button"
          data-bs-target={`${"#" + id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
