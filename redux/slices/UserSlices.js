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
    setNotification: state => {
      state.notification += 1;
    },
  },
});

export const {setData, setNotification} = userSlice.actions;

export default userSlice.reducer;
