import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.userData = actions.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
