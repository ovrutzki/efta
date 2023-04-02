import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {IDay} from "../../components/types/interfaces/interfaces";
import daySample from "../../data_samples/day_sample.json"


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




export const daysSlicer = createSlice({
    name: "days",
    initialState: {
        selectedDayValue: daySample as IDay,
        allDaysDataValue: [] as IDay[],
        is_data_ready : false,
        dates_with_data : [] as string[],
        is_weekend: false
    },
    reducers: {
        filterSelectedDateDataInSlicer: (state,action) => {

            const dayToDisplay = state.allDaysDataValue.find((day)=> day.date === action.payload )

            if (dayToDisplay){
                state.selectedDayValue = dayToDisplay;
            }
        },
        filterIsWeekend:(state,action) =>{
            state.is_weekend =action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllDays.pending, (state) => {
            })
            .addCase(fetchAllDays.fulfilled, (state, action) => {
                state.allDaysDataValue = action.payload;
                const dates:string[]=[];
                for (let i =0;i<action.payload.length;i++){
                   dates.push(action.payload[i].date)
                }
                state.dates_with_data=dates
                state.is_data_ready = true
            })
            .addCase(fetchAllDays.rejected, (state, action) => {
            })

    },
});

export const { filterSelectedDateDataInSlicer, filterIsWeekend } = daysSlicer.actions;


export default daysSlicer.reducer;
