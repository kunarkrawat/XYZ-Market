import classes from "./HowItWorks.module.css";
import Card from "./Card_HowItWorks";

const HowItWorks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.how_it_works}>
        <h2>
          How It <span> Works</span>
        </h2>
        <div className={classes.cards}>
          <Card title='Connect Your Website to XYZ' />
          <Card title='Choose your languages & Markets' />
          <Card title='Choose from the list of domains' />
          <Card
            isArrowShown={false}
            title='Translated website goes live, locally and globally.'
          />
        </div>
      </div>
      <div className={classes.description}>
        <p>
          Let your business bloom on <br /> the foreign market. Let your <br />{" "}
          website speak with the <br /> foreign markets in the local <br /> and
          native language of your <br />
          own customers.
        </p>
        <img src='/images/flower.png' alt='' />
      </div>
    </div>
  );
};

export default HowItWorks;
