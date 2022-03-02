import {configureStore} from '@reduxjs/toolkit';

import userSlice from './slices/UserSlices';

export const store = configureStore({
  reducer: {
    userData: userSlice,
  },
});
