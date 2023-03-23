import React from "react";
import * as icons from "@mui/icons-material";
import * as mui from "@mui/material";
import { Box, Typography } from "@mui/material";
const headline = {
  fontWeight: "bold",
  color: "primary.main",
};
const one_line = {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "start",
};

const h6_style = { fontWeight: "bold" };

const data_subtitle_style = {
  color: "black",
  maxWidth: "45%",
  overflow: "scroll"
};

const events_sx={
    width:"100%",
    p:1,
    borderColor:"primary.light",
    border:"2px solid",
    borderRadius:"10px",
    fontWeight:"bold",
    color:"primary.light",


}
const TodaysInformation: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ width: "100vw", textAlign: "center" }}>
        <Typography variant="h5" sx={headline}>
          Advanced HTML & CSS
        </Typography>
        <Typography variant="subtitle1" sx={headline}>
          Thu 23/3
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: "10px",
          gap: "10px",
          color: "primary.light",
          width: "100vw",
        }}
      >
        <Box sx={one_line}>
          <Typography variant="h6" sx={h6_style}>
            📌 Location:
          </Typography>
          <Typography variant="subtitle1" sx={data_subtitle_style}>
            Ahed Haam 21, TLV
          </Typography>
        </Box>
        <Box sx={one_line}>
          <Typography variant="h6" sx={h6_style}>
            🕐 From / To:
          </Typography>
          <Typography variant="subtitle1" sx={data_subtitle_style}>
            9:30AM - 18:00PM
          </Typography>
        </Box>
        <Box sx={one_line}>
          <Typography variant="h6" sx={h6_style}>
            🔗 Meeting Link:
          </Typography>
          <Typography variant="subtitle1" sx={data_subtitle_style}>
            <a href={"https://google.com"}>
              https://exsample.com/sadhfdjhapofdiuan
            </a>
          </Typography>
        </Box>
        <Box sx={one_line }>

        <Typography variant="h6" sx={h6_style}>
          📅 Events:
        </Typography>
        <Box sx={{py:"4px",width:"45vw", gap:"10px", display:"flex",flexDirection:"column"}}>
            <mui.Paper  elevation={6} sx={events_sx}>EVENT 1</mui.Paper>
            <mui.Paper  elevation={6} sx={events_sx}>EVENT 2</mui.Paper>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TodaysInformation;
