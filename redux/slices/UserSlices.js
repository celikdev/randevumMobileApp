import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.userData = actions.payload;
    },
  },
});

export const {setData} = userSlice.actions;

export default userSlice.reducer;
