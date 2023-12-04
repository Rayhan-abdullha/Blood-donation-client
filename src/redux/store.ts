import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import volunteerReducer from './features/volunteer/volunteerSlice';
import logger from './logger';


export const store = configureStore({
  reducer: {
    userReducer,
    volunteerReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
