import classes from "./Pricing.module.css";
import Card from "./Card_Pricing.js";

const Pricing = () => {
  return (
    <div id='pricing' className={classes.pricing}>
      <h2>
        Pricing <span> Plans</span>
      </h2>
      <div className={classes.cards}>
        <div className={classes.completeCard}>
          <Card
            isFirst={false}
            link='https://buy.stripe.com/bIY5kw87E4jueek00r'
            title='Shark'
            checks={[
              "AI Translation upto 4 languages",
              "Website localization",
              "Metatags Implementation",
              "3 Modified TLDs",
            ]}
            price='110'
            image='/images/plan1.png'
          />
        </div>
        <div className={classes.completeCard}>
          <Card
            title='White Shark'
            link='https://buy.stripe.com/4gw3coew2bLW2vC28A'
            checks={[
              "AI Translation upto 7 languages",
              "Website localization",
              "Metatags Implementation",
              "3 Modified TLDs",
              "Upto 4 ccTLDs Domain",
              "Link Building",
              "Citation",
              "Bot Protection",
            ]}
            isBackground={true}
            price='210'
            image='/images/plan2.png'
          />
        </div>
        <div className={classes.completeCard}>
          <Card
            title='Megalodon'
            link='https://buy.stripe.com/fZefZafA63fqb28bJb'
            checks={[
              "AI Translation upto 12 languages",
              "Website localization",
              "Metatags Implementation",
              "3 Modified TLDs",
              "Upto 4 ccTLDs Domain",
              "Link Building",
              "Citation",
              "Bot Protection",
              "W3C Implementation",
              "Blended Multi language Blogs",
            ]}
            price='570'
            image='/images/plan3.png'
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
