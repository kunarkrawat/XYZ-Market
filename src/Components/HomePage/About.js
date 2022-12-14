import classes from "./About.module.css";

const About = () => {
  const points = [
    "Formalizing and translating the website in your customer's own native language or with the blend of languages such as Hinglish, Runglish, Spanglish, Denglish, Swenglish etc",
    " Overcoming TLDs restrictions for your website can be global and local at the same time using ccTLDs",
    "Creating a network of high-rank and reliable links for your website, so your website can be in the top search results for the regions you want to be on.",
    "Decreasing your website loading time along with the bounce rate.",
  ];

  return (
    <div className={classes.about} id='about'>
      <div className={classes.about_left}>
        <img className={classes.about_image} src='/images/about.svg' alt='' />
      </div>
      <div className={classes.about_right}>
        <h2>
          About
          <img
            className={classes.vector}
            src='/images/about_vector1.png'
            alt='vector'
          />
        </h2>
        <div className={classes.blur_circle}>
          {points.map((item, index) => {
            return (
              <div className={classes.flex}>
                <span>
                  <img className={classes.tick} src='/images/tick.png' alt='' />
                </span>
                <p key={index}>{item}</p>
              </div>
            );
          })}
        </div>
        <img
          className={classes.vector_2}
          src='/images/about_vector2.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default About;
