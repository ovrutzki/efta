import { configureStore } from "@reduxjs/toolkit";
import { IMonday } from "../slicer/mondaySlicer";
import mondayReducer from "../slicer/mondaySlicer"



export interface IRootState{
    code:IMonday;
  }

  export default configureStore({
    reducer: {
      code: mondayReducer
    },
  });