import { configureStore } from "@reduxjs/toolkit";
import IDay from "../components/types/interfaces/interfaces";
import daysSlicer from "./slicers/daysSlicer";


export interface RootState {
 days:{
    TodaysValue: IDay,
    AllDaysDataValue: IDay[],
 }
}

export default configureStore({
  reducer: {
    days: daysSlicer,

  },
});
