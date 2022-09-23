import classes from "./Card_HowItWorks.module.css";

const Card_HowItWorks = ({ isArrowShown = true, title }) => {
  console.log(window.innerWidth);
  return (
    <div className={classes.flex}>
      <div className={classes.card}>
        <p>{title}</p>
      </div>
      {isArrowShown && (
        <div className={classes.image}>
          <img src='/images/arrow.png' alt='' />
        </div>
      )}
    </div>
  );
};

export default Card_HowItWorks;
