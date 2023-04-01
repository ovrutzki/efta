import { configureStore } from "@reduxjs/toolkit";
import IDay from "../components/types/interfaces/interfaces";
import daysSlicer from "./slicers/daysSlicer";


export interface RootState {
 days:{
    selectedDayValue: IDay,
    AllDaysDataValue: IDay[],
    is_data_ready:boolean,
    dates_with_data :string[]

 }
}

export default configureStore({
  reducer: {
    days: daysSlicer,

  },
});


