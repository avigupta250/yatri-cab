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

const details=[
    {
        title:"DISCOVERING INDIA'S DIVERSE LANDSCAPE, ONE SCENIC ROAD TRIP AT A TIME",
        benifits:[
           "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.",
           "Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.",
           "We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.",
           "No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.",
           "Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 7860663399 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.",
           "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip."
        ]
    },
    {
        title:"WHY CHOOSE YATRI CAR RENTAL?",
        benifits:[
            "Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in INDIA.",
            "Service You Can Trust - At Yatri Car Rental, we are dedicated to providing dependable services in INDIA. We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients.",
            "Safety is Our Priority - Safety and comfort are paramount at Yatri Car Rental in INDIA. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers.",
            "Expert Chauffeurs at Your Service - Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.",
            "Extensive Industry Experience - With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services.",
            "Proven Track Record - We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher."
        ]
    }
]
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
          <div key={index} className={styles.carContainer}>
            <h1>{car.title}</h1>
            <div className={styles.specs}>
              {car.types.map((type, index) => (
                <h1 key={index}>{type}</h1>
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

      {/* why choose one way cab */}
      <div>
        <h1>WHY CHOOSE ONE WAY CAB?</h1>
        <div className={styles.whyChooseContainer}>
            <div >
               <div >
                <li>Instant Booking & Confirmation</li>
                <li>Confirmed Booking Immediately</li>
                <li>No Return Fare for One-Way Trip</li>
                <li>Clean & Professional Cab Services</li>
                <li>Transparent Billing with GPS based billing system</li>
               </div>
            </div>

                <img  src="./red-taxi.png" alt="red-taxi"/>
        

            <div>
                <div>
                    <li>Dedicated Cab just for you</li>
                    <li>Pick-up from your house</li>
                    <li>Drop to your desired destination</li>
                    <li>Completed more than 20,000+ Oneway Trips</li>
                    <li>Multiple Payment Option including Credit Card.</li>
                  
                </div>
            </div>
        </div>

        <div>
            <h1>Discover affordable travel with our seamless intercity car rentals in India – where excellence meets affordability with standardized rates in every city. Unleash your journey!</h1>
        </div>
      </div>

      {/* detailed experiece */}
      <div className={styles.detail}>
        {
          details.map((detail,index)=>(
            <div key={index}>
              <div className={styles.detailsTitle}>{detail.title}</div>
              <div className={styles.detailSBenifit}>
                {detail.benifits.map((benifit,index)=>(
                  <li key={index}>{benifit}</li>
                ))}
              </div>
              </div>
          ))
        }
      </div>
    </div>
  );
}
