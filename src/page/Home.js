import Banner from "../components/banner/Banner";
import Navbar from "../components/navbar/Navbar";
import SmallCircleLeft from "../components/smallCircleBtnLeft/SmallCircleLeft";
import SmallCircleMR from "../components/smallCircleMR/SmallCircleMR";
import homeStyle from "./home.module.css";
import data1 from "../util/dataSchool";
import data2 from "../util/dataUndergrad";
import data3 from "../util/dataCircleIcons";
import data4 from "../util/productCard1";
import TrialBar from "../components/trialBar/TrialBar";
import CircleIcons from "../components/circleIcons/CircleIcons";
import Carousel from "../components/carousel/Carousel";
import data5 from "../util/productCard2";
import data7 from "../util/productCard3";
import data6 from "../util/departments";
import Departments from "../components/departments/Departments";
import CreditCardbar from "../components/creditCardBar/CreditCardbar";
import MediumCard from "../components/mediumCard/MediumCard";
import data8 from "../util/mediumCard1";
import data9 from "../util/bigCard1";
import data10 from "../util/productCard4";
import data11 from "../util/bigCard2";
import data12 from "../util/mediumCard2";
import data13 from "../util/bigCard3";
import { useState } from "react";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div className={homeStyle["main-container"]}>
      <Navbar />
      <div className={homeStyle["medium-container"]}>
        <div className="container">
          <div className={homeStyle["banner-section"]}>
            <Banner />
          </div>
          <div className={homeStyle["small-circle-btn"]}>
            <SmallCircleLeft />
            <div className={homeStyle["s-c-mr"]}>
              <h5>School year savings</h5>
              <div className={homeStyle["s-c-mr-1"]}>
                {data1.map((item) => {
                  return <SmallCircleMR key={item.id} item={item} />;
                })}
              </div>
            </div>
            <div className={homeStyle["s-c-mr"]}>
              <h5>Undergrad essentials</h5>
              <div className={homeStyle["s-c-mr-1"]}>
                {data2.map((item) => {
                  return <SmallCircleMR key={item.id} item={item} />;
                })}
              </div>
            </div>
          </div>
          <TrialBar />
          <div className={homeStyle["circle-icons-cont"]}>
            <h5>All you need for less</h5>
            <div className={homeStyle["circle-icons"]}>
              {data3.map((item) => {
                return <CircleIcons key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["product-container"]}>
            <div className={homeStyle["product-main-title"]}>
              <h5>Homebacks roll</h5>
              <a href="/">View all</a>
            </div>
            <Carousel data={data4} id={"car1"} />
          </div>
          <div className={homeStyle["product-container"]}>
            <div className={homeStyle["product-main-title"]}>
              <h5>Build your cart</h5>
              <a href="/">View all</a>
            </div>
            <Carousel data={data5} id={"car2"} />
          </div>
          <div className={homeStyle["product-container"]}>
            <div className={homeStyle["product-main-title"]}>
              <h5>Your favorite departments</h5>
              <a href="/">View all</a>
            </div>
            <div className={homeStyle["department-icons"]}>
              {data6.map((item) => {
                return <Departments key={item.id} item={item} />;
              })}
            </div>
            <div>
              <CreditCardbar />
            </div>
          </div>
          <div className={homeStyle["product-container"]}>
            <div className={homeStyle["product-main-title"]}>
              <h5>Popular in vehicle parts & accessories</h5>
              <a href="/">View all</a>
            </div>
            <Carousel data={data7} id={"car3"} />
          </div>
          <div className={homeStyle["medium-card-main"]}>
            <h5>For you</h5>
            <div className={homeStyle["medium-card"]}>
              {data8.map((item) => {
                return <MediumCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["medium-card-main"]}>
            <h5>In season</h5>
            <div className={homeStyle["medium-card"]}>
              {data9.map((item) => {
                return <MediumCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["product-container"]}>
            <div className={homeStyle["product-main-title"]}>
              <h5>Popular in vehicle parts & accessories</h5>
              <a href="/">View all</a>
            </div>
            <Carousel data={data10} id={"car4"} />
          </div>
          <div className={homeStyle["medium-card-main"]}>
            <h5>Brand new for you</h5>
            <div className={homeStyle["medium-card"]}>
              {data11.map((item) => {
                return <MediumCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["medium-card-main"]}>
            <h5>Health & wellness</h5>
            <div className={homeStyle["medium-card"]}>
              {data12.map((item) => {
                return <MediumCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["medium-card-main"]}>
            <h5>Sharing our values</h5>
            <div className={homeStyle["medium-card"]}>
              {data13.map((item) => {
                return <MediumCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className={homeStyle["show"]}>
            <p>
              {!show
                ? "Make your pantry at Walmart, your supermarket at home."
                : null}
            </p>
            <button onClick={() => setShow(!show)}>
              {!show ? "show less" : "show more"}
            </button>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
