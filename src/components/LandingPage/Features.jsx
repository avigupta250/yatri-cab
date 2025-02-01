import styles from "./features.module.css";

const benifits = [
  {
    logo: "Logo",
    title: "RETURN FARE, NOT FAIR!",
    description:
      " Why Pay For Return Journey When You Are Travelling One-Way? Now Get           Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Onewway Travel",
  },
  {
    logo: "Logo",
    title: "RETURN FARE, NOT FAIR!",
    description:
      " Why Pay For Return Journey When You Are Travelling One-Way? Now Get           Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Onewway Travel",
  },
  {
    logo: "Logo",
    title: "RETURN FARE, NOT FAIR!",
    description:
      " Why Pay For Return Journey When You Are Travelling One-Way? Now Get           Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Onewway Travel",
  },
];

export default function Features() {
  return (
    <div>
      <div className={styles.benifitContainer}>
        {
            benifits.map((benifit,index)=>(
                <div key={index} className={styles.benifit}>
                    <span>{benifit.logo}</span>
                    <h1>{benifit.title}</h1>
                    <p>{benifit.description}</p>
                </div>
            ))
        }

      </div>
    </div>
  );
}
