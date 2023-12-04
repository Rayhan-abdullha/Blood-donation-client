import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const initialState = {
  user: {}
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: (state) => {
      state.user = {}
    }
  },
});
export const { addUser, removeUser } =
  userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;