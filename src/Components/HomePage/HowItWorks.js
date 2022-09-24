import classes from "./HowItWorks.module.css";
import Card from "./Card_HowItWorks";

const HowItWorks = () => {
  const points = [
    "A website in a native language makes the customer feel close to your business and facilitates them to understand your business in a better way.",
    "Website in a native language will undoubtedly increase the audience that was previously untapped.",
  ];

  return (
    <div className={classes.container}>
      <div className={classes.how_it_works}>
        <h2>
          How It <span> Works</span>
        </h2>
        <div className={classes.cards}>
          <Card title='Connect Your Website to ATIUTTAM' />
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
         Let your business bloom on the foreign markets by letting your website speak to your customers in their own native language.

         <div className={classes.about} id='about'>
            
            <div className={classes.about_left}>
            <br />{" "}<br />{" "}
              <div className={classes.blur_circle}>
                {points.map((item, index) => {
                  return (
                    <div className={classes.flex}>
                      <span>
                        <img style={{ position: "relative", top: "0.6rem", width: "2.3rem", right: "0.8rem", marginLeft: "0", marginRight: "0"}} src='/images/tick.png' alt='' />
                      </span>
                        <p style={{fontSize: '1.1rem', marginLeft: "0", textAlign: "left", marginBottom: "3rem" }} key={index} >{item}</p>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </p>
        
        <img src='/images/flower.png' alt='' />
      </div>
  </div>
  );
};
export default HowItWorks;

