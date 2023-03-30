import { createSlice } from "@reduxjs/toolkit";
import IDay from "../../components/types/interfaces/interfaces";
import sample from "../../data/sample.json"

export const daysSlicer = createSlice({
  name: "days",
  initialState: {
    TodaysValue: {} as IDay,
    AllDaysDataValue: [] as IDay[],
  },
  reducers: {
    getTodaysValue: (state) => {
      state.TodaysValue =  sample;
    },
    getAllDaysDataValue: (state, action) => {
    //   state.value.push(AllDaysDataValue);
    },
  },
});

export const { getAllDaysDataValue, getTodaysValue } = daysSlicer.actions;

export default daysSlicer.reducer;
