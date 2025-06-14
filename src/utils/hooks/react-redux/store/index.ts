// Redux for state management
import { configureStore } from "@reduxjs/toolkit";
// Theme Slices
import themeReducer from "./slices/themeSlice";
import reserveFilterReducer from "./slices/reserve-slice";
import landingFilterReducer from "./slices/landing-slice";
import rentFilters from "./slices/rent-slice";
import userIdReducer from "./slices/user-id-slice";
import comparisonIdsReducer from "./slices/comparison";
import stepsIdReducer from "./slices/steps-slice";
import createTourReducer from "./slices/create-tour";
import tourStepsReducer from "./slices/tour-steps";
import bookingStepsReducer from "./slices/booking-step";
import bookingReducer from "./slices/book-hotel-slice";

// Function to configure redux store
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    reserveFilters: reserveFilterReducer,
    landingFilters: landingFilterReducer,
    rentFilters: rentFilters,
    userId: userIdReducer,
    comparisonIds: comparisonIdsReducer,
    stepsId: stepsIdReducer,
    createTour: createTourReducer,
    tourSteps: tourStepsReducer,
    bookingSteps: bookingStepsReducer,
    bookingCreate: bookingReducer,
  },
});

export type AppStore = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
