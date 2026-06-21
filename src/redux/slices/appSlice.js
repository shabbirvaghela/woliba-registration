import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    loading: false,
  },

  reducers: {
    showLoader: (state) => {
      state.loading = true;
    },

    hideLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoader, hideLoader } = appSlice.actions;

export default appSlice.reducer;
