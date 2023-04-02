import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IAttendance} from "../../components/types/interfaces/interfaces";
import attendanceSample from "../../data_samples/attendance_sample.json";

export const fetchAllAttendance = createAsyncThunk(
  "days/fetchAllAttendance",
  async () => {
    const userString = sessionStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const response = await axios.get(
      "https://efta-back.onrender.com/api/attendance/allDaysAttendance",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    return response.data;
  }
);


export const attendanceSlicer = createSlice({
  name: "attendance",
  initialState: {
    selectedDayAttendanceValue: attendanceSample as IAttendance,
    allDaysAttendanceValue: [] as  IAttendance[],
    isAttendanceDataReady: false,
  },
  reducers: {
    filterSelectedDateAttendanceUser: (state,action) => {

      const dayToDisplayAttendance = state.allDaysAttendanceValue.find((day)=> day.date === action.payload )

      if (dayToDisplayAttendance){
          state.selectedDayAttendanceValue = dayToDisplayAttendance;
      }},
      updateSlicer: (state,action) => {
        for (let i=0;i<state.allDaysAttendanceValue.length;i++){
          if (state.allDaysAttendanceValue[i].date === action.payload.date){
            state.allDaysAttendanceValue[i].attendance[0].status = action.payload.status
            break;
          }
        }
      }
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAttendance.pending, (state) => {
      })
      .addCase(fetchAllAttendance.fulfilled, (state, action) => {
        state.allDaysAttendanceValue = action.payload;
        state.isAttendanceDataReady = true
      })
      .addCase(fetchAllAttendance.rejected, (state, action) => {
      })
      
  },
});

export const { filterSelectedDateAttendanceUser,updateSlicer } = attendanceSlicer.actions;


export default attendanceSlicer.reducer;
