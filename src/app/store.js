import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import practiceReducer from '../features/practice/practiceSlice'

export const store = configureStore({
  reducer: {
    practice: practiceReducer,
  },
});
