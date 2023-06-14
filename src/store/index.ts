import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
