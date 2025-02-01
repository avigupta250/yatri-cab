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
import { useState } from "react";

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Indore",
  "Chandigarh",
  "Bhopal",
  "Visakhapatnam",
  "Goa",
];

const BookingForm = () => {
  const dispatch = useDispatch();
  const { tripType, serviceType, from, to, date, time, error } = useSelector(
    (state) => state.booking
  );

  const [allCities, setAllCities] = useState(cities);

  const [filteredCities, setFilteredCities] = useState(allCities);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const handleFromInputChange = (e) => {
    const value = e.target.value;
    dispatch(setFrom(value));

    if (value.length > 0) {
      const filtered = allCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowFromDropdown(true);
    } else {
      setFilteredCities(allCities);
      setShowFromDropdown(true);
    }
  };

  const handleFromSelectCity = (city) => {
    dispatch(setFrom(city));
    setFilteredCities(allCities);
    setShowFromDropdown(false);
  };
  const handleToInputChange = (e) => {
    const value = e.target.value;
    dispatch(setTo(value));

    if (value.length > 0) {
      const filtered = allCities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setShowToDropdown(true);
    } else {
      setFilteredCities(allCities);
      setShowToDropdown(true);
    }
  };

  const handleToSelectCity = (city) => {
    dispatch(setTo(city));
    setFilteredCities(allCities);
    setShowToDropdown(false);
  };

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
            gap: "30px",
          }}
        >
          {/* one way */}
          <div className={styles.inputBox} style={{ position: "relative" }}>
            <label className={styles.label}>
              {serviceType === "local" ? "PICK UP CITY" : "FROM"}
            </label>
            <input
              className={styles.input}
              type="text"
              value={from}
              onChange={handleFromInputChange}
              onFocus={() => setShowFromDropdown(true)}
            />

            {/* Dropdown List */}
            {showFromDropdown && filteredCities.length > 0 && (
              <ul className={styles.dropdown}>
                {filteredCities.map((city, index) => (
                  <li key={index} onClick={() => handleFromSelectCity(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.inputBox} style={{ position: "relative" }}>
          <label className={styles.label}>
              {serviceType === "local" ? "PICK UP " : "TO"}
            </label>
            <input
              className={styles.input}
              type="text"
              value={to}
              onChange={handleToInputChange}
              onFocus={() => setShowToDropdown(true)}
            />

            {/* Dropdown List */}
            {showToDropdown && filteredCities.length > 0 && (
              <ul className={styles.dropdown}>
                {filteredCities.map((city, index) => (
                  <li key={index} onClick={() => handleToSelectCity(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* date and time */}
        <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
          {/* date */}
          <div className={styles.inputBox}>
            <label className={styles.label}>PICK UP DATE</label>
            <input
              className={styles.input}
              type="date"
              value={date}
              onChange={(e) => dispatch(setDate(e.target.value))}
            />
          </div>
          {/* return date */}
          {tripType === "round-trip" && serviceType === "outstation" && (
            <div className={styles.inputBox}>
              <label className={styles.label}>RETURN DATE</label>
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => dispatch(setDate(e.target.value))}
              />
            </div>
          )}

          {/* time */}
          <div className={styles.inputBox}>
            <label className={styles.label}>PICK UP At</label>
            <input
              className={styles.input}
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

// <div
// style={{
//   display: "flex",
//   justifyContent: "space-between",
//   width: "100%",
//   gap: "100px",
//   marginBottom: "20px",
// }}
// >
// <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     width: "50%",
//   }}
// >
//   <label
//     style={{
//       fontSize: "14px",
//       fontWeight: "bold",
//       color: "black",

//       // marginBottom: "5px",
//     }}
//   >
//     FROM
//   </label>
//   <input
//     style={{
//       backgroundColor: "white",
//       border: "none",
//       color: "black",
//       borderBottom: "2px solid black",
//       fontSize: "16px",
//       outline: "none",
//       width: "100%",
//     }}
//     type="text"
//     // placeholder="From"
//     value={from}
//     onChange={(e) => dispatch(setFrom(e.target.value))}
//   />
// </div>

// <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     width: "50%",
//   }}
// >
//   <label
//     style={{
//       fontSize: "14px",
//       fontWeight: "bold",
//       color: "black",
//       // marginBottom: "5px",
//     }}
//   >
//     TO
//   </label>
//   <input
//     style={{
//       backgroundColor: "white",
//       border: "none",
//       color: "black",
//       borderBottom: "2px solid black",
//       fontSize: "16px",
//       outline: "none",
//       width: "100%",
//     }}
//     type="text"
//     // placeholder="To"
//     value={to}
//     onChange={(e) => dispatch(setTo(e.target.value))}
//   />
// </div>
// </div>

// <div
// style={{
//   display: "flex",
//   justifyContent: "space-between",
//   width: "100%",
//   gap: "100px",
// }}
// >
// {/* pickup date */}
// <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     width: "50%",
//   }}
// >
//   <label
//     style={{
//       fontSize: "14px",
//       fontWeight: "bold",
//       color: "black",

//       // marginBottom: "5px",
//     }}
//   >
//     PICK UP DATE
//   </label>
//   <input
//     style={{
//       backgroundColor: "white",
//       border: "none",
//       color: "black",
//       borderBottom: "2px solid black",
//       fontSize: "16px",
//       outline: "none",
//       width: "100%",
//     }}
//     type="date"
//     value={date}
//     onChange={(e) => dispatch(setDate(e.target.value))}
//   />
// </div>

// {/* return date */}
// {tripType==="round-trip" &&serviceType === "outstation"&&
//  <div
//  style={{
//    display: "flex",
//    flexDirection: "column",
//    width: "50%",
//  }}
// >
//  <label
//    style={{
//      fontSize: "14px",
//      fontWeight: "bold",
//      color: "black",

//      // marginBottom: "5px",
//    }}
//  >
//   RETURN DATE
//  </label>
//  <input
//    style={{
//      backgroundColor: "white",
//      border: "none",
//      color: "black",
//      borderBottom: "2px solid black",
//      fontSize: "16px",
//      outline: "none",
//      width: "100%",
//    }}
//    type="date"
//    value={date}
//    onChange={(e) => dispatch(setDate(e.target.value))}
//  />
// </div>}

// <div
//   style={{
//     display: "flex",
//     flexDirection: "column",
//     width: "50%",
//   }}
// >
//   <label
//     style={{
//       fontSize: "14px",
//       fontWeight: "bold",
//       color: "black",
//       // marginBottom: "5px",
//     }}
//   >
//     PICK UP AT
//   </label>
//   <input
//   className={styles.input-time}
//     style={{
//       backgroundColor: "white",
//       border: "none",
//       color: "black",
//       borderBottom: "2px solid black",
//       fontSize: "16px",
//       outline: "none",
//       width: "100%",
//     }}
//     type="time"
//     value={time}
//     onChange={(e) => dispatch(setTime(e.target.value))}
//   />
// </div>
// </div>
