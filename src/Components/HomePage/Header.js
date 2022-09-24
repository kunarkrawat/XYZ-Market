import classes from "./Header.module.css";
import Typical from "react-typical";

const Header = () => {
  return (
    <div class={classes.header} id='home'>
      <div>
        {/* <p class = "hashtag">
          <b>#1 & only platform that translates website into mixed languages.</b>
        </p> */}
        <h1>
          Let Your Business <br /> appear As local on <br /> the{" "}
          <span>
            <Typical
              loop={Infinity}
              wrapper='b'
              steps={[
                "Russian",
                2000,
                "Indian",
                2000,
                "European",
                2000,
                "Canadian",
                2000,
                "MENA",
                2000,
                "EMEA",
                2000,
                "APAC",
                2000,
                "Global",
                2000,
                "LAD & NA",
                2000,
              ]}
            />
          </span>{" "}
          Market.
        </h1>
        <p>
        Overcome the limitation of language barrier and take your website to the global markets and represent it as a local business to your customers, be local and global at the same time!
        </p>
        <a href='#pricing'>
          <button>See Plans</button>
          <span> - Free Trial</span>
        </a>
      </div>
      <img src='/images/header_right.png' alt='' />
    </div>
  );
};

export default Header;
