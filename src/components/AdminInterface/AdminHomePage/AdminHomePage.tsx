import { Box, Button } from "@mui/material";
import { url } from "inspector";
import React from "react";
import DayBox from "../DayBox/DayBox";
import SideBar from "../SideBar/SideBar";

const AdminHomePage: React.FC = () => {

      return (<> 
      <Box sx={{backgroundImage:"url(./background.svg)"}}>
        <SideBar ></SideBar>
        </Box>
        </>)
    }

export default AdminHomePage;