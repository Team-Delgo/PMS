import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state, action) {
      return {
        token: action.payload,
      };
    },
    tokenInitialization() {
      return initialState;
    },
  },
});

export const tokenActions = tokenSlice.actions;
export default tokenSlice.reducer;
