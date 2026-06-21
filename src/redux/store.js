import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "./slices/registrationSlice";
import appReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    app: appReducer,
  },
});
