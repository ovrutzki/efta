import React from "react";
import { Box } from "@mui/material";
import * as icons from "@mui/icons-material";
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
        justifyContent: "space-around",
      }}
    >

      <mui.IconButton color="primary" >
        <icons.MenuRounded sx={{fontSize:"40px", color:"primary.light"}}/>
      </mui.IconButton>
      
      <mui.Typography variant="h4">Home</mui.Typography>

      <mui.Button><img src="./assets/logo/logo.svg"></img></mui.Button>

    </Box>
    
  );
};

export default UserNavBar;
