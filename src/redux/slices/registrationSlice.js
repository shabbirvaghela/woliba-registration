import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,

  company: null,

  user: {
    email: "",
    firstName: "",
    lastName: "",
  },

  otpToken: "",
  otpVerified: false,

  profile: {
    password: "",
    dob: "",
    phone: "",
    workAnniversary: "",
  },

  interests: [],
  pillars: [],

  registrationCompleted: false,
};

const registrationSlice = createSlice({
  name: "registration",

  initialState,

  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },

    setCompany: (state, action) => {
      state.company = action.payload;
    },

    setUserDetails: (state, action) => {
      state.user = action.payload;
    },

    setOtpToken: (state, action) => {
      state.otpToken = action.payload;
    },

    setOtpVerified: (state, action) => {
      state.otpVerified = action.payload;
    },

    setProfile: (state, action) => {
      state.profile = action.payload;
    },

    setInterests: (state, action) => {
      state.interests = action.payload;
    },

    setPillars: (state, action) => {
      state.pillars = action.payload;
    },

    setRegistrationCompleted: (state, action) => {
      state.registrationCompleted = action.payload;
    },

    resetRegistration: () => initialState,
  },
});

export const {
  setCurrentStep,
  setCompany,
  setUserDetails,
  setOtpToken,
  setOtpVerified,
  setProfile,
  setInterests,
  setPillars,
  setRegistrationCompleted,
  resetRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;
