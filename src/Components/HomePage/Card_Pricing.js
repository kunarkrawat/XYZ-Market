import classes from "./Card_Pricing.module.css";
import { FaCheck } from "react-icons/fa";

const Card_Pricing = ({
  isFirst = true,
  checks,
  title,
  price,
  image,
  isBackground = false,
  link,
}) => {
  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      <img src={image} alt='' />
      <h2 className={classes.price}>
      ${price} <span>/month</span>
      </h2>
      <a href={link}>
        <button
          style={{
            background: isBackground ? "#FF7F7F" : "none",
            cursor: "pointer",
          }}>
          Get Started
        </button>
      </a>
      {checks.map((item, index) => {
        return (
          <p key={index}>
            <FaCheck style={{ marginRight: "1rem", color: "#ff7f7f" }} />
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default Card_Pricing;
