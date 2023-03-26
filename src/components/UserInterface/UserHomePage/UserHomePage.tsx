import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Typography, Box } from "@mui/material";
import UserNavBar from "../UserInterface Components/UserNavBar/UserNavBar";
import TodaysInformation from "../UserInterface Components/TodaysInformation/TodaysInformation";
import UpperUserCalendar from "../UserInterface Components/UpperUserCalendar/UpperUserCalendar";
import AttendanceBar from "../UserInterface Components/AttendanceBar/AttendanceBar";

const UserHomePage: React.FC = () => {

  return (<Box sx={{minHeight:"100vh", backgroundImage:'url("/assets/mainBG/background_vector.svg")',backgroundSize: 'cover', display:"flex", flexDirection:"column", alignItems:"center"}}>

<Box sx={{height:"260px", boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25);", borderRadius:"0px 0px 30px 30px", backgroundColor:"#EBEBEC", width:"100vw"}}>
 <UserNavBar/>
  <UpperUserCalendar/>
</Box>

<AttendanceBar />

</Box>
  );
};

export default UserHomePage;
