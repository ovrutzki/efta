import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Typography, Box } from "@mui/material";
import UserNavBar from "../UserInterface Components/UserNavBar/UserNavBar";
import TodaysInformation from "../UserInterface Components/TodaysInformation/TodaysInformation";

const UserHomePage: React.FC = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  return (<>
  
  <UserNavBar/>
  <Box sx={{border:"1px purple solid"}}>

    <LocalizationProvider dateAdapter={AdapterDayjs} >
      {/* <Typography variant="h2">{`${value?.get("date")}`} </Typography> */}
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  </Box>

    <TodaysInformation/>
  </>
    
  );
};

export default UserHomePage;
 