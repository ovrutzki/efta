import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import IDay from "../../components/types/interfaces/interfaces";
import sample from "../../data/sample.json"


export const fetchAllDays = createAsyncThunk(
    "days/fetchAllDays",
    async () => {
        const userString = sessionStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        const response = await axios.get("https://efta-back.onrender.com/api/days",
        { headers: {
            "Content-Type": "application/json"  ,
            Authorization: `Bearer ${user.token}`}
            });

        return response.data;
    }
);


export const fetchSelectedDay = createAsyncThunk(
    "days/fetchSelectedDay",
    async (date: string) => {
        const userString = sessionStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : null;
        const response = await axios.get("https://efta-back.onrender.com/api/days/getOneDay", {data: { date: date }, headers: { Authorization: `Bearer ${user.token}`,"Content-Type": "application/json" } });
        return response.data;
    }
);

export const daysSlicer = createSlice({
    name: "days",
    initialState: {
        selectedDayValue: sample as IDay,
        allDaysDataValue: [] as IDay[],
        is_data_ready : false
    },
    reducers: {
        filterSelectedDateDataInSlicer: (state,action) => {
            console.log(action.payload)
            console.log(state.allDaysDataValue)
            const dayToDisplay = state.allDaysDataValue.find((day)=> day.date === action.payload )
            console.log(dayToDisplay)
            if (dayToDisplay){
                state.selectedDayValue = dayToDisplay;
            }

        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDays.pending, (state) => {
                console.log("fetching days")
            })
            .addCase(fetchAllDays.fulfilled, (state, action) => {
                state.allDaysDataValue = action.payload;
                console.log(action.payload)
                console.log(state.allDaysDataValue)

                state.is_data_ready = true
                console.log("ready")
            })
            .addCase(fetchAllDays.rejected, (state, action) => {
                console.log(action.error.message);
            })
            .addCase(fetchSelectedDay.pending, (state) => {})
            .addCase(fetchSelectedDay.fulfilled, (state, action) => {
                state.selectedDayValue = action.payload;
            })
            .addCase(fetchSelectedDay.rejected, (state, action) => {
                console.log(action.error.message);
            });
    },
});

export const { filterSelectedDateDataInSlicer } = daysSlicer.actions;


export default daysSlicer.reducer;
