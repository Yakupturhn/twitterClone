/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";

const store = configureStore({
  reducer: {
    auth,
  },
});
export default store;
