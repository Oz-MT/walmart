import navbarStyle from "./navbar.module.css";
import walmartLogo from "../../assets/walmartLogo.svg";
import hand from "../../assets/small-icons/hand.png";
import { GoLocation } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";

import { BiGridAlt, BiCategoryAlt, BiHome } from "react-icons/bi";

// import { AiOutlineSearch } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className={navbarStyle["main-container"]}>
      <div className={navbarStyle["top-navbar"]}>
        <div className={navbarStyle["top-navbar-left"]}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={navbarStyle["hamburger"]}
          >
            <GiHamburgerMenu />
          </div>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "3.5rem",
                backgroundColor: "white",
              }}
            >
              <ul>
                <li>Deneme</li>
                <li>Deneme</li>
                <li>Deneme</li>
                <li>Deneme</li>
                <li>Deneme</li>
              </ul>
            </div>
          )}
          <button>
            <img src={walmartLogo} alt="walmartLogo" />
          </button>

          <div className={navbarStyle["hamburger-list"]}></div>

          <button className={navbarStyle["down-list"]}>
            <BiGridAlt />
            <span>Departmants</span>
            <div className={navbarStyle["list"]}>
              <a href="/">
                <b>All Departments</b>
              </a>
              <a href="/">Savings & Featured</a>
              <a href="/">Featured Brands</a>
              <a href="/">Grocery</a>
              <a href="/">Electronics</a>
              <a href="/">Clothing, Shoes & Accessories</a>
              <a href="/">Home, Furniture & Appliances</a>
              <a href="/">Toys & Games</a>
              <a href="/">Video Games</a>
              <a href="/">Home Improvement</a>
              <a href="/">Office & School Supplies</a>
              <a href="/">Baby</a>
              <a href="/">Patio & Garden</a>
              <a href="/">House Hold Essantials</a>
              <a href="/">Beauty</a>
              <a href="/">Personal Care</a>
            </div>
          </button>
          <button className={navbarStyle["down-list"]}>
            <BiCategoryAlt />
            <span>Services</span>

            <div className={navbarStyle["list"]}>
              <a href="/">
                <b>All Services</b>
              </a>
              <a href="/">Auto Care Center Services</a>
              <a href="/">Health Services</a>
              <a href="/">Registry, Lists & Gifts</a>
              <a href="/">Custom Cakes</a>
              <a href="/">Photo Services</a>
              <a href="/">Financial Services</a>
              <a href="/">Protection, Home & Tech</a>
              <a href="/">Get Inspired</a>
              <a href="/">Community & Given</a>
            </div>
          </button>
        </div>
        <div className={navbarStyle["top-navbar-medium"]}>
          <select
            className={navbarStyle["top-navbar-medium-select"]}
            name="allDepartments"
            id="allDepartments"
          >
            <option value="All Departments" selected>
              All Departments
            </option>
            <option value="">Video Games</option>
            <option value="">Party & Occasions</option>
            <option value="">Jewelry</option>
            <option value="">Books</option>
            <option value="">Electronics</option>
            <option value="">Home</option>
            <option value="">Movie & TV</option>
            <option value="">Music on CD or Vinly</option>
            <option value="">Sports</option>
            <option value="">Outdoors</option>
            <option value="">Toys</option>
            <option value="">Photo Center</option>
            <option value="">Baby</option>
            <option value="">Patio & Garden</option>
            <option value="">Pharmacy</option>
            <option value="">Clothing</option>
            <option value="">Pets</option>
            <option value="">Auto & Tires</option>
            <option value="">Food</option>
            <option value="">Health</option>
          </select>
          <input
            className={navbarStyle["top-navbar-medium-search"]}
            type="text"
            placeholder="Search everything at Walmart online and in store"
          />
        </div>
        <div className={navbarStyle["top-navbar-right"]}>
          <button className={navbarStyle["down-list"]}>
            <FiRepeat />
            <span>Reorder</span>
          </button>
          <button className={navbarStyle["down-list"]}>
            <BsPerson />
            <span>Sign In</span>
          </button>
          <button>
            <RiShoppingCartLine className={navbarStyle["top-shopping"]} />
          </button>
        </div>
      </div>
      <div className={navbarStyle["bottom-navbar"]}>
        <div className={navbarStyle["bottom-left"]}>
          <img src={hand} alt="" />
          <span>How do you want your items? </span>
          <button className={navbarStyle["down-arrow"]}>
            <IoIosArrowDown />
          </button>
          |
          <span className={navbarStyle["location-icon"]}>
            <GoLocation />
          </span>
          Sacramento, 95829
          <span className={navbarStyle["home-icon"]}>
            <BiHome />
          </span>
          Sacramento Supercenter
        </div>
        <div className={navbarStyle["bottom-right"]}>
          <a href="/">Grocery</a>
          <a href="/">Tech</a>
          <a href="/">Fashion</a>
          <a href="/">Home</a>
          <a href="/">Cooling</a>
          <a href="/">Flash picks</a>
          <a id={navbarStyle["covid"]} href="/">
            COVID 19 test kits
          </a>
          <a id={navbarStyle["walmart"]} href="/">
            Walmart+
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
