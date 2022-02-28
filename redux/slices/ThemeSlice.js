import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  theme: null,
};

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = counterSlice.actions;
export default counterSlice.reducer;
