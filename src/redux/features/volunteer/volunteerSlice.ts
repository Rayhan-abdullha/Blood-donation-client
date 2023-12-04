import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface Volunteer {
  // id: string;
  name: string;
  email: string;
}
export const initialState = {
    allVolunteer: [
        
    ],
    singleVolunteer: {},

}

export const volunteerSlice = createSlice({
    name: "volunteer",
  initialState,
  reducers: {
    fetchVolunteer: (state, action: PayloadAction<Volunteer>) => {
      state.allVolunteer.push(action.payload)
    },
  },
});
export const { fetchVolunteer } = volunteerSlice.actions;
export const userSelector = (state: RootState) => state.volunteerReducer;
export default volunteerSlice.reducer;