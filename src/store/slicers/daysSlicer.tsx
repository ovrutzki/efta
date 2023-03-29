import { createSlice } from "@reduxjs/toolkit";
import IDay from "../../components/types/interfaces/inetfaces";

export const daysSlicer = createSlice({
  name: "days",
  initialState: {
    TodaysValue: [] as IDay[],
    AllDaysDataValue: [] as IDay[],
  },
  reducers: {
    getTodaysValue: (state, action) => {
    //   state.value.push(TodaysValue);
    },
    getAllDaysDataValue: (state, action) => {
    //   state.value.push(AllDaysDataValue);
    },
  },
});

export const { getAllDaysDataValue, getTodaysValue } = daysSlicer.actions;

export default daysSlicer.reducer;
