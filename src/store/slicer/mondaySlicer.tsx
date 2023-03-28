import { createSlice } from "@reduxjs/toolkit";

export interface IMonday{
    code:string;
}
export const mondaySlicer = createSlice({
    name: "monday",
    initialState: {
      value: [],
      code:"",
    },
    reducers: {
      getMondayCode: (state, action) => {
        state.code = action.payload;
      },

    },
  });
  
  export const { getMondayCode } = mondaySlicer.actions;
  export default mondaySlicer.reducer;
