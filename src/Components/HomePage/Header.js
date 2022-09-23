import classes from "./Header.module.css";
import Typical from "react-typical";

const Header = () => {
  return (
    <div class={classes.header} id='home'>
      <div>
        <h1>
          Let Your Business <br /> appear As local on <br /> the{" "}
          <span>
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "French",
                2000,
                "Russia",
                2000,
                "UAE",
                2000,
                "India",
                2000,
                "US",
                2000,
                "Canada",
                2000,
                "Spain",
                2000,
                "Global",
                2000,
                "Europe",
                2000,
              ]}
            />
          </span>{" "}
          Market.
        </h1>
        <p>
          Everything you need to translate, display and manage your <br />{" "}
          mulitlingual website, with full editing control.
        </p>
        <a href='#pricing'>
          <button>See Plans</button>
          <span> - Free Trial</span>
        </a>
      </div>
      <img src='/images/header_right.jpeg' alt='' />
    </div>
  );
};

export default Header;
