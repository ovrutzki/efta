import React from "react";
import { Box } from "@mui/material";
import * as mui from "@mui/material";

const UserNavBar: React.FC = () => {
  return (
    <Box
      sx={{
        border: "1px green solid",
        height: "8vh",
        display: "flex",
        position: "sticky",
        alignItems: "center",
        justifyContent: "space-between",
        px:"30px"
      }}
    >

      <Box sx={{width:"40px",height:"40px", border:" 1px green solid"}}>MENU</Box>

      <mui.Typography variant="h4" sx={{position:"absolute", right:"50%", transform:"translate(50%)"}}>HOME</mui.Typography>

      <mui.Button
  sx={{
    borderRadius:"15px",
    ".MuiTouchRipple-child": {
      backgroundColor: "#0080ff69"
    },'&:hover': { backgroundColor: 'transparent' }

  }}
>
  <img src="./assets/logo/logo.svg" alt="Logo" />
</mui.Button>


    </Box>

  );
};

export default UserNavBar;
