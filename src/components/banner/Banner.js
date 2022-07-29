import React from "react";
import bannerStyle from "./banner.module.css";
import bannerRightImg from "../../assets/banner-right.jpeg";
import img1 from "../../assets/banner-slider/1.jpg";
import img2 from "../../assets/banner-slider/2.jpg";
import img4 from "../../assets/banner-slider/4.jpg";

const Banner = () => {
  return (
    <div className={bannerStyle["main-container"]}>
      <div className={bannerStyle["banner-left"]}>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img4} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
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
      <div className={bannerStyle["banner-right"]}>
        <div className={bannerStyle["card-top"]}>
          <h5>Rollback of the day</h5>
          <a href="/">View all</a>
        </div>
        <div className={bannerStyle["card-img"]}>
          <img src={bannerRightImg} alt="bannerRightImg" />
        </div>
        <h4>From $45.99</h4>
        <p>Sony PS4 DualShock 4 Wireless Controller - Green Camouflage</p>
      </div>
    </div>
  );
};

export default Banner;
