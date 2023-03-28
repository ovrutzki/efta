import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import AttendanceBar from "../../UserInterface/UserInterface Components/AttendanceBar/AttendanceBar";
import TodaysInformation from "../../UserInterface/UserInterface Components/TodaysInformation/TodaysInformation";
import UpperUserCalendar from "../../UserInterface/UserInterface Components/UpperUserCalendar/UpperUserCalendar";
import UserNavBar from "../../UserInterface/UserInterface Components/UserNavBar/UserNavBar";


const statusBgColor = (status:number)=>{
  switch (status){
    case Number("-1"):
      return "#EA7B7B"
      
    case Number("0"):
      return "#2abc1ab3"
    
    default:
      return "#EAD87B"
    
  }
}
const statusDisplay = (status:number)=>{
  switch (status){
    case Number("-1"):
      return(<>
                  <img style={{width:"15px", height:"15px"}} src="./assets/Icons/attendanceBar/x_icon.svg"/>
          Not today
      </>)
      
    case Number("0"):
      return (<>
                  <img style={{width:"15px", height:"15px"}} src="./assets/Icons/attendanceBar/ok_icon.svg"/>
          On time</>)
    
    default:
      return (<>
        <img style={{width:"20px", height:"20px"}} src="./assets/Icons/attendanceBar/hurry_icon.svg" />
{(`${status} hr | 10:30 AM`)}
</>)
    
  }
}

const AdminHomePage: React.FC = () => {

  const status_sx = {
    display:"flex",
        gap:"5px",
        width:"fit-content",
        height: "30px",
        borderRadius: "16px",
        px:1,
        fontWeight: "400",
        fontSize:"clamp(9px,3vw,15px)",
        alignItems:"center",
        color:"white"
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/assets/mainBG/background_vector.svg")',
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "270px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          borderRadius: "0px 0px 30px 30px",
          backgroundColor: "#EBEBEC",
          width: "100%",
        }}
      >
        <UserNavBar role="admin" />
        <UpperUserCalendar />
      </Box>

      <Box
        sx={{
          my: "15px",
          width: "90%",
          bgcolor: "#EBEBEC",
          borderRadius: "16px",
          minHeight: "100px",
          height: "fit-content",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          display: "flex",
          flexDirection: "column",
          p: 2,
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {[
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },
          { studentName: "Eran Hagever", status: 0.5 },
          { studentName: "Eran Hagever", status: 0 },
          { studentName: "Eran Hagever", status: -1 },

        ].map((item) => {
          return (
            <Box
              sx={{
                borderBottom: "2px #B7B7B7 solid",
                p: "4px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#979CA9", fontWeight: "bold" }}
              >
                {item.studentName}
              </Typography>
              <Box sx={{...status_sx, bgcolor: statusBgColor(item.status)}}>{
              statusDisplay(item.status)}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AdminHomePage;
