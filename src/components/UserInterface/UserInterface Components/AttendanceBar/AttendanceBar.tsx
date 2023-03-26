import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Slider, Typography } from "@mui/material";

const AttendanceBar: React.FC = () => {

    const button_sx = {
        display:"flex",
        gap:"5px",
        boxShadow: "none",
        width:"fit-content",
        height: "30px",
        borderRadius: "16px",
        px:1,
        fontWeight: "400",
        fontSize:"11px"
    }

const [selectedAttendance, setSelectedAttendance ] = useState("on_time");
const [open, setOpen] = React.useState(false);
const [sliderValue, setSliderValue] = React.useState(-1);
const handleSliderChange = (event:any, value:any) => {
    setSliderValue(Number(value));
  };
const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
    ) => {
        if (reason !== "backdropClick") {
            setOpen(false);
    }
  };

  useEffect(()=>{
    if (selectedAttendance === "on_time" || selectedAttendance === "not_today"){
    setSliderValue(-1);}

  },[selectedAttendance]
  )

  return (<>
<Box sx={{
    width:"90%",height:"54px", display:"flex",justifyContent:"space-between", my:"15px", px:"10px", alignItems:"center", backgroundColor:"#B5B8C2",borderRadius:"16px"
}}>

    <img src="./assets/Icons/attendance_icon.svg"></img>

    <Box sx={{mx:"5px", display:"flex",gap:"5px", justifyContent:"space-between"}}>
    <Button
          onClick={()=>{
            setSelectedAttendance("on_time")
          }}
          variant="contained"
          sx={{
            ...button_sx,
            backgroundColor: selectedAttendance === "on_time" ? "#2abc1ab3" :"#2abc1a25",
            boxShadow: selectedAttendance === "on_time" ? "0px 4px 4px rgba(0, 0, 0, 0.25);"  :"none" , 
            border:"0.5px solid #2abc1ab3",
            "&:hover": { backgroundColor: selectedAttendance === "on_time" ? "#2abc1ab3" :"#2abc1a25" },
          }}>
            <img src="./assets/Icons/attendanceBar/ok_icon.svg"/>
          On time
        </Button>
    <Button
          onClick={()=>{
            setSelectedAttendance("not_today")
          }}
          variant="contained"
          sx={{
            ...button_sx,
            backgroundColor: selectedAttendance === "not_today" ? "#EA7B7B": "#ea7b7b36",
            boxShadow: selectedAttendance === "not_today" ? "0px 4px 4px rgba(0, 0, 0, 0.25);"  :"none" , 
            border:"0.5px solid #EA7B7B",
            "&:hover": { backgroundColor: selectedAttendance === "not_today" ? "#EA7B7B": "#ea7b7b36" },
          }}>
            <img src="./assets/Icons/attendanceBar/x_icon.svg"/>
          Not today
        </Button>
    <Button
          onClick={()=>{
            setSelectedAttendance("ill_be_late")
            setSliderValue(0.5)
            handleClickOpen()
          }}
          variant="contained"
          sx={{
            ...button_sx,
            minWidth:"86px",
            backgroundColor: selectedAttendance === "ill_be_late" ? "#EAD87B"  :"#ead87b3b" ,
            border:"0.5px solid #EAD87B",
            boxShadow: selectedAttendance === "ill_be_late" ? "0px 4px 4px rgba(0, 0, 0, 0.25);"  :"none" , 
            "&:hover": { backgroundColor: selectedAttendance === "ill_be_late" ? "#EAD87B"  :"#ead87b3b" },
          }}>
              <img src="./assets/Icons/attendanceBar/hurry_icon.svg" />
{sliderValue < 0 ? (
  <>
    {"I'll be late"}
  </>
) : (
  `${sliderValue} hr`
)}
        </Button>
    </Box>



</Box>

    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle sx={{color:"secondary.main"}}>How much are we talking about?  {`(${sliderValue} hr)`}</DialogTitle>
          <DialogContent>
          <Box sx={{px:"5px", height:"120px" , display:"flex",alignItems:"center", justifyContent:"center" }}>
          <Slider
  defaultValue={0.5}
  onChange={handleSliderChange}
  valueLabelFormat={(value) => `${value} hr`}
  valueLabelDisplay="auto"
  step={0.5}
  marks
  min={0.5}
  max={4}
/>

    </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" sx={{color:"secondary.main", fontSize:"20px", borderColor:"secondary.main"}} onClick={handleClose}>  {(() => {
    switch (sliderValue) {
      case 0.5:
        return "OK..";
      case 1:
        return "OK.....";
      case 1.5:
        return "?!?!?!";
      case 2:
        return "no, no, no....";
      case 2.5:
        return "Don't even bother";
      case 3:
        return "Seriously??";
      case 3.5:
        return "Stay Home";
      case 4:
        return "💀💀💀";
      default:
        return "OK";
    }
  })()}</Button>
          </DialogActions>
        </Dialog>
    
</>
  );
};

export default AttendanceBar;
