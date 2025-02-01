// import styles from "../styles/bookingCard.module.css"; // Correct Path
"use client";
import { useSelector, useDispatch } from "react-redux";
import {
  setTripType,
  setServiceType,
  setFrom,
  setTo,
  setDate,
  setTime,
  setError,
} from "../../lib/bookingSlice";

import styles from "./bookingCard.module.css";

const BookingForm = () => {
  const dispatch = useDispatch();
  const { tripType, serviceType, from, to, date, time, error } = useSelector(
    (state) => state.booking
  );

  const handleBooking = (e) => {
    e.preventDefault();
    if (!from || !to || !date || !time) {
      dispatch(setError("Please fill all fields before booking."));
      return;
    }
    dispatch(setError(""));
    alert(`Booking Confirmed!   
      Type: ${serviceType},  
      Trip: ${tripType},  
      From: ${from},  
      To: ${to},  
      Date: ${date},  
      Time: ${time}  
    `);
  };

  return (
    <div className={styles.bookingBox}>
      {/* Service Type Tabs */}
      <div className={styles.tabs}>
        <button
          className={serviceType === "outstation" ? styles.activeTab : ""}
          onClick={() => dispatch(setServiceType("outstation"))}
        >
          Outstation
        </button>
        <button
          className={serviceType === "local" ? styles.activeTab : ""}
          onClick={() => dispatch(setServiceType("local"))}
        >
          Local
        </button>
        <button
          className={serviceType === "airport" ? styles.activeTab : ""}
          onClick={() => dispatch(setServiceType("airport"))}
        >
          Airport
        </button>
      </div>

      {/* Trip Type Toggle */}
      {serviceType === "outstation" && (
        <div className={styles.tripType}>
          <button
            className={tripType === "one-way" ? styles.activeTrip : ""}
            onClick={() => dispatch(setTripType("one-way"))}
          >
            One Way
          </button>
          <button
            className={tripType === "round-trip" ? styles.activeTrip : ""}
            onClick={() => dispatch(setTripType("round-trip"))}
          >
            Round Trip
          </button>
        </div>
      )}

      {/* Booking Form */}

      <form onSubmit={handleBooking} className="{styles.form}">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "100px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",

                // marginBottom: "5px",
              }}
            >
              FROM
            </label>
            <input
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderBottom: "2px solid black",
                fontSize: "16px",
                outline: "none",
                width: "100%",
              }}
              type="text"
              // placeholder="From"
              value={from}
              onChange={(e) => dispatch(setFrom(e.target.value))}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                // marginBottom: "5px",
              }}
            >
              TO
            </label>
            <input
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderBottom: "2px solid black",
                fontSize: "16px",
                outline: "none",
                width: "100%",
              }}
              type="text"
              // placeholder="To"
              value={to}
              onChange={(e) => dispatch(setTo(e.target.value))}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "100px",
          }}
        >
          {/* pickup date */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",

                // marginBottom: "5px",
              }}
            >
              PICK UP DATE
            </label>
            <input
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderBottom: "2px solid black",
                fontSize: "16px",
                outline: "none",
                width: "100%",
              }}
              type="date"
              value={date}
              onChange={(e) => dispatch(setDate(e.target.value))}
            />
          </div>

          {/* return date */}
          {tripType==="round-trip" &&serviceType === "outstation"&&
           <div
           style={{
             display: "flex",
             flexDirection: "column",
             width: "50%",
           }}
         >
           <label
             style={{
               fontSize: "14px",
               fontWeight: "bold",
               color: "black",

               // marginBottom: "5px",
             }}
           >
            RETURN DATE
           </label>
           <input
             style={{
               backgroundColor: "white",
               border: "none",
               color: "black",
               borderBottom: "2px solid black",
               fontSize: "16px",
               outline: "none",
               width: "100%",
             }}
             type="date"
             value={date}
             onChange={(e) => dispatch(setDate(e.target.value))}
           />
         </div>}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "black",
                // marginBottom: "5px",
              }}
            >
              PICK UP AT
            </label>
            <input
            className={styles.input-time}
              style={{
                backgroundColor: "white",
                border: "none",
                color: "black",
                borderBottom: "2px solid black",
                fontSize: "16px",
                outline: "none",
                width: "100%",
              }}
              type="time"
              value={time}
              onChange={(e) => dispatch(setTime(e.target.value))}
            />
          </div>
        </div>

        <button type="submit" className={styles.exploreBtn}>
          EXPLORE CABS
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
