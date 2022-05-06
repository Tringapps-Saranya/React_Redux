import { configureStore } from '@reduxjs/toolkit';
import webPage from './Counterslice';

export default configureStore({
  reducer: {
    web: webPage,
  },
})