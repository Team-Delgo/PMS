import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: false,
  user: {
    adminId: 0,
    email: "",
    name: "",
    password: "",
    phoneNo: "",
    registDt: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signin(state, action) {
      return {
        isSignIn: true,
        user: action.payload.user,
      };
    },
    signout() {
      return initialState;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
