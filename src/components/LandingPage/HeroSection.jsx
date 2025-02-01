import Head from "next/head";

import BookingForm from "./BookingForm";
import styles from "./bookingCard.module.css";

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
      <div>
        <h1>Safety Guaranteed</h1>
        <p>Well-Maintained Cars | Trained Drivers</p>
      </div>
      <div>
        <h1>Best Prices</h1>
        <p>Affordable Rides | No Hidden Charges</p>
      </div>
    </div>
  </div>
  
  );
}
