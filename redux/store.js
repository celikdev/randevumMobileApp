import {configureStore} from '@reduxjs/toolkit';

import themeReducer from './slices/ThemeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
