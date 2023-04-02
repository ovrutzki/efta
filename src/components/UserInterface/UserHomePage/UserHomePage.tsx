import * as React from "react";

import { Typography, Box } from "@mui/material";
import UserNavBar from "../UserInterface Components/UserNavBar/UserNavBar";
import TodaysInformation from "../UserInterface Components/TodaysInformation/TodaysInformation";
import UpperUserCalendar from "../UserInterface Components/UpperUserCalendar/UpperUserCalendar";
import AttendanceBar from "../UserInterface Components/AttendanceBar/AttendanceBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserHomePage: React.FC = () => {

  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

    const navigate = useNavigate()
      useEffect(()=>{ if(user && user.userInfo.role === "admin"){
    navigate("/admin")
  } },[])

  return (<Box sx={{minHeight:"100vh", backgroundImage:'url("/assets/mainBG/background_vector.svg")',backgroundSize: 'cover', display:"flex", flexDirection:"column", alignItems:"center"}}>

<Box sx={{height:"270px", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25);", borderRadius:"0px 0px 30px 30px", backgroundColor:"#EBEBEC", width:"100%"}}>
 <UserNavBar/>
  <UpperUserCalendar/>
</Box>

<AttendanceBar />
<TodaysInformation />
</Box>
  );
};

export default UserHomePage;
