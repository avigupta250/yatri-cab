import styles from "./features.module.css";
// import hand from "../../../public/hand.png"
// import location from "../../../public/location.png"
// import driving from "../../../public/driving.png"

const benifits = [
  {
    logo: "/hand.png", // Public folder image path
    title: "RETURN FARE, NOT FAIR!",
    description:
      "Why Pay For Return Journey When You Are Travelling One-Way? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Oneway Travel",
  },
  {
    logo: "/location.png",
    title: "RETURN FARE, NOT FAIR!",
    description:
      "Why Pay For Return Journey When You Are Travelling One-Way? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Oneway Travel",
  },
  {
    logo: "/driving.png",
    title: "RETURN FARE, NOT FAIR!",
    description:
      "Why Pay For Return Journey When You Are Travelling One-Way? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your Oneway Travel",
  },
];

const yatriBenifits = [
  {
    image: "./flag.png",
    title: "FAST RESPONSE TIME",
    description:
      "Experience the Best Car Rental Service with Driver for Local or Outstation Trips. Enjoy prompt response times and seamless car hire service, ensuring you get on the road quickly",
  },
  {
    image: "./people.png",
    title: "FAST FLEET",
    description:
      "We offer a wide range of rental cars including Sedans, SUVs, MUVs, premium Sedans, and Tempo Travellers to meet all your needs.",
  },
  {
    image: "./phone.png",
    title: "EASY TO ORDER",
    description:
      "Easily Book a Cab Online through our user-friendly website, mobile application, or by calling our customer support team",
  },
  {
    image: "./paid.png",
    title: "GREAT TARIFFS    ",
    description:
      "Rent a Car at the Lowest Rates! Our car hire tariffs are highly competitive compared to other operators. Book online cabs at the best prices with Yatri Car Rental.",
  },
];

const cars = [
  {
    title: "CAR TYPE",
    types: ["AC Sedans", "AC Hatchbacks","AC SUV" ],
  },
  {
    title: "MODEL INCLUDES",
    types: ["Etios, Amaxe, Dzire etc", "Wagon R, Celerio, Micra etc","Ertiga, Xylo etc" ],
  },

  {
    title: "PASSENGERS",
    types: ["4 Pax", "4 Pax","6-7 Pax" ],
  },
  {
    title: "IDEAL FOR",
    types: ["Comfortable trips with small families", "Budget trips over short distances","Premium trips with large families" ],
  },
  {
    title:"FARE",
    types:["RS.11/KM","RS.11/KM","RS.13/KM"]
  }
];
export default function Features() {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.benifitContainer}>
        {benifits.map((benifit, index) => (
          <div key={index} className={styles.benifit}>
            <img src={benifit.logo} alt="logo" />
            <h1>{benifit.title}</h1>
            <p>{benifit.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.description}>
        <h1>India's Premier Intercity and Local Taxi Services</h1>
        <p>
          At Yatri Cabs, we pride ourselves on being a top-tier online cab
          booking service, delivering reliable and premium intercity and local
          taxi services. With over a decade of experience, we have become the
          leading chauffeur-driven car rental company in India, renowned for our
          expansive coverage across the country.
        </p>
      </div>

      {/* why yatri */}
      <div>
        <h1>WHY YATRI</h1>
        <div className={styles.whyYatri}>
          <img src="./car.png" alt="car-image" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            {yatriBenifits.map((benifits, index) => (
              <div key={index} className={styles.yatriBenifits}>
                <div>
                  {" "}
                  <img src={benifits.image} alt="image" />
                </div>
                <div>
                  <h1>{benifits.title}</h1>
                  <p>{benifits.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* car types */}
      <div className={styles.specsContainer}>
      
        {cars.map((car, index) => (
          <div className={styles.carContainer}>
            <h1>{car.title}</h1>
            <div className={styles.specs}>
              {car.types.map((type, index) => (
                <h1 >{type}</h1>
              ))}
            </div>
          </div>
        ))}
       
      </div>

      {/* Taxi-Location */}
      <div className={styles.taxiContainer}>
        <div className={styles.description}>
           <h1>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span style={{color:"green"}}>ONE-WAY JOURNEY</span>?</h1>
           <p >Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly.
           read More</p>
        </div>
        <div>
            <img src="./taxi.png" alt="taxi"/>
        </div>
      </div>
    </div>
  );
}
