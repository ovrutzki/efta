import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {IAttendance} from "../../components/types/interfaces/interfaces";
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

export const fetchSelectedDayAttendance = createAsyncThunk(
  "days/fetchSelectedDayAttendance",
  async (date: string) => {
    const userString = sessionStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const response = await axios.get(
      "https://efta-back.onrender.com/api/attendance/singleDayAttendance",
      {
        data: { date: date },
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
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
    allDaysAttendanceValue: [] as IAttendance[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAttendance.pending, (state) => {
        console.log("fetching all attendance");
      })
      .addCase(fetchAllAttendance.fulfilled, (state, action) => {
        state.allDaysAttendanceValue = action.payload;
        console.log("done all attendance");
      })
      .addCase(fetchAllAttendance.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(fetchSelectedDayAttendance.pending, (state) => {
        console.log("fetching single day attendance");
      })
      .addCase(fetchSelectedDayAttendance.fulfilled, (state, action) => {
        state.selectedDayAttendanceValue = action.payload;
        console.log("done single day attendance");
      })
      .addCase(fetchSelectedDayAttendance.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

export default attendanceSlicer.reducer;
