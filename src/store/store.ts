import { configureStore } from "@reduxjs/toolkit";
import  { IDay,IAttendance } from "../components/types/interfaces/interfaces";
import attendanceSlicer from "./slicers/attendanceSlicer";
import daysSlicer from "./slicers/daysSlicer";


export interface RootState {
 days:{
    selectedDayValue: IDay,
    AllDaysDataValue: IDay[],
    is_data_ready:boolean,
    is_weekend:boolean,
    dates_with_data : string[]
 },
 attendance:{
  selectedDayAttendanceValue: IAttendance,
  allDaysAttendanceValue: IAttendance[],
  isAttendanceDataReady:boolean,
 }
}

export default configureStore({
  reducer: {
    days: daysSlicer,
    attendance: attendanceSlicer,

  },
});
