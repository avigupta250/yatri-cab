import Head from "next/head";

import BookingForm from "./BookingForm";
import styles from "./bookingCard.module.css";
import Header from "../Header";

export default function HeroSection() {
  return (
    <div className={styles.bookingContainer}>
     
    <div className={styles.heading}>
      INDIA'S{" "}
      <span className={styles.highlight}>LEADING ONE-WAY INTER-CITY</span>{" "}
      CAB SERVICE PROVIDER
    </div>
    <div>
      <BookingForm />
    </div>
  
    {/* Bottom Section */}
    <div className={styles.bottomSection}>
      <div>
        <h1>Transparent Billing</h1>
        <p>GPS Based Billing | No km Tampering</p>
      </div>
      <div className={styles.line}></div>


      <div>
        <h1 style={{
          fontSize:"20px",
          color:"green"
        }}>Download Now!</h1>
        <div style={{
          display:"flex"
        }}>
          <img src="./google-play.png" alt="google-play"/>
          <img src="./app-store.png" alt="app-stroe"/>
        </div>
      </div>
      <div className={styles.line}></div>
      <div>
        <h1>No return fare</h1>
        <p>One-Way cab fare | No Hidden Charges</p>
      </div>
    </div>
  </div>
  
  );
}
