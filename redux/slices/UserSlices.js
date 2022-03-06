import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: '',
  notification: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setData: (state, actions) => {
      state.userData = actions.payload;
    },
    setNotification: (state, actions) => {
      state.notification = actions.payload;
    },
  },
});

export const {setData, setNotification} = userSlice.actions;

export default userSlice.reducer;
