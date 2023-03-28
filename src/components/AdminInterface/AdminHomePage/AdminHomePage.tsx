import { Box, Button } from "@mui/material";
import { url } from "inspector";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMondayCode } from "../../../store/slicer/mondaySlicer";
import { getToken } from "../../../utils/utils";
import DayBox from "../DayBox/DayBox";
import SideBar from "../SideBar/SideBar";

const AdminHomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    if (url.includes("=")) {
      const cutTheHead = url.split("=");
      console.log(cutTheHead);
      if (cutTheHead[1].includes("&")) {
        const cutTheTail = cutTheHead[1].split("&");
        const code = cutTheTail[0];
        if (code) {
          dispatch(getMondayCode(code));
          sessionStorage.setItem("code", code);
          console.log(code);
        }
      }
    }
  }, []);


  return (
    <>
      <Box sx={{ backgroundImage: "url(./background.svg)" }}>
        <SideBar></SideBar>
      </Box>
    </>
  );
};

export default AdminHomePage;
