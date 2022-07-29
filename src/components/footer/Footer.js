import footerStyle from "../footer/footerStyle.module.css";

const Footer = () => {
  return (
    <div className={footerStyle["main-container"]}>
      <div className={footerStyle["top"]}>
        <p>We'd love to hear what you think!</p>
        <div>
          <button>Give feedback</button>
        </div>
      </div>
      <div className={footerStyle["bottom"]}>
        <div className={footerStyle["bottom-top"]}>
          <div>
            <a href="/">All Departments</a>
            <a href="/">Store Directory</a>
            <a href="/">Careers</a>
            <a href="/">Our Company</a>
            <a href="/">Sell on Wallmart.com</a>
            <a href="/">Help</a>
            <a href="/">COVID-19 Vaccine Scheduler</a>
            <a href="/">Product Recalls</a>
            <a href="/">Accessibility</a>
            <a href="/">Tax Exempt Program</a>
          </div>
          <div>
            <a href="/">Get the Walmart App</a>
            <a href="/">Sign-up for Email</a>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy & Security</a>
            <a href="/">CA Privacy Rights</a>
            <a href="/">California Supply Chain Act</a>
            <a href="/">Do Not Sell My Personal Information</a>
          </div>
          <div className={footerStyle["bottom-top-last"]}>
            <a href="/">Request My Personal Information</a>
          </div>
        </div>

        <div className={footerStyle["bottom-bottom"]}>
          <p>© 2022 Walmart. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
