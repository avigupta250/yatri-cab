import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripType: "one-way",
  serviceType: "outstation",
  from: "",
  to: "",
  date: "",
  time: "",
  error: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setServiceType: (state, action) => {
      state.serviceType = action.payload;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTripType,
  setServiceType,
  setFrom,
  setTo,
  setDate,
  setTime,
  setError,
} = bookingSlice.actions;
export default bookingSlice.reducer;
