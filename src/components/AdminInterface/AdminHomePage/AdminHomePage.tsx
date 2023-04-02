import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterSelectedDateAttendanceUser } from "../../../store/slicers/attendanceSlicer";
import { RootState } from "../../../store/store";
import AttendanceBar from "../../UserInterface/UserInterface Components/AttendanceBar/AttendanceBar";
import TodaysInformation from "../../UserInterface/UserInterface Components/TodaysInformation/TodaysInformation";
import TodaysInformationButton from "../../UserInterface/UserInterface Components/TodaysInformation/TodaysInformationButtton";
import UpperUserCalendar from "../../UserInterface/UserInterface Components/UpperUserCalendar/UpperUserCalendar";
import UserNavBar from "../../UserInterface/UserInterface Components/UserNavBar/UserNavBar";


const statusBgColor = (status: number) => {
  switch (status) {
    case Number("-1"):
      return "#EA7B7B";

    case Number("0"):
      return "#2abc1ab3";

    default:
      return "#EAD87B";
  }
};
const statusDisplay = (status: number) => {
  switch (status) {
    case Number("-1"):
      return (
        <>
          <img
            style={{ width: "15px", height: "15px" }}
            src="./assets/Icons/attendanceBar/x_icon.svg"
          />
          Not today
        </>
      );

    case Number("0"):
      return (
        <>
          <img
            style={{ width: "15px", height: "15px" }}
            src="./assets/Icons/attendanceBar/ok_icon.svg"
          />
          On time
        </>
      );

    default:
      return (
        <>
          <img
            style={{ width: "20px", height: "20px" }}
            src="./assets/Icons/attendanceBar/hurry_icon.svg"
          />
          {`${status} hr`}
        </>
      );
  }
};

const AdminHomePage: React.FC = () => {

  const dispatch = useDispatch<any>()

  const is_weekend_selected = useSelector((state:RootState)=> state.days.is_weekend)

  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

    const navigate = useNavigate()
    
  
  useEffect(()=>{ if(user && user.userInfo.role === "user"){
    navigate("/")
  } },[])

  const [toggleValue, setToggleValue] = useState("ALL");
  const currentDate: string = useSelector(
    (state: RootState) => state.days.selectedDayValue.date
  );
  const todaysAttendanceReady = useSelector((state:RootState)=>state.attendance.isAttendanceDataReady) 
  
  if (todaysAttendanceReady){
    dispatch(filterSelectedDateAttendanceUser(currentDate))
  }
  const todaysAttendance = useSelector((state:RootState)=>state.attendance.selectedDayAttendanceValue.attendance) 


  const status_sx = {
    display: "flex",
    gap: "5px",
    width: "fit-content",
    height: "25px",
    borderRadius: "16px",
    px: 1,
    fontWeight: "400",
    fontSize: "clamp(8px,2.8vw,15px)",
    alignItems: "center",
    color: "white",
  };
  const button_sx = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    my: 1,
    borderRadius: "6px",
    width: "24vw",
    letterSpacing: "0.8px",
  };





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
        <UserNavBar />
        <UpperUserCalendar />
      </Box>

      {!is_weekend_selected? <>
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
        }}
      >
        <Box
          sx={{
            px: 1,
            gap: 1,
            alignSelf: "flex-start",
            width: "fit-content",
            height: "50px",
            display: "flex",
            justifyContent: "space-around",
            bgcolor: "#EBEBEC",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              ...button_sx,
              bgcolor: toggleValue === "SORTED" ? "none" : "#989CA9",
              color: toggleValue === "SORTED" ? "#989CA9" : "white",
            }}
            onClick={() => {
              setToggleValue("ALL");
            }}
          >
            ALL
          </Box>
          <Box
            sx={{
              ...button_sx,
              bgcolor: toggleValue === "ALL" ? "none" : "#989CA9",
              color: toggleValue === "ALL" ? "#989CA9" : "white",
            }}
            onClick={() => {
              setToggleValue("SORTED");
            }}
          >
            SORTED
          </Box>
        </Box>
        <TodaysInformationButton
          href="https://www.monday.com"
          src="./assets/Icons/buttonsIcons/monday_icon.png"
          padding={15}
          width={50}
          height={50}
          radius={13}
          shadow={false}
        />
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
        }}
      >
        {todaysAttendance.filter((obj)=> Object.keys(obj).length>1)
          .filter((item) =>
            toggleValue === "SORTED" ? item.status !== 0 : true
          )
          .sort((a, b) => (toggleValue === "SORTED" ? b.status - a.status : 0))
          .map((item) => {
            return (
              <Box
                sx={{
                  borderBottom: "2px #B7B7B7 solid",
                  p: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#979CA9", fontWeight: "bold" }}
                  >
                    {item.studentName}
                  </Typography>

                  <TodaysInformationButton
                    src="./assets/Icons/buttonsIcons/whatsapp_icon.svg"
                    padding={8}
                    width={28}
                    height={28}
                    radius={10}
                    href={`https://api.whatsapp.com/send?phone=972${item.phone}`}
                    shadow={false}
                  />
                </Box>

                <Box sx={{ ...status_sx, bgcolor: statusBgColor(item.status) }}>
                  {statusDisplay(item.status)}
                </Box>
              </Box>
            );
          })}
      </Box>
</>:<Box sx={{my:"15px"}}></Box>}
      <TodaysInformation />
    </Box>
  );
};

export default AdminHomePage;
