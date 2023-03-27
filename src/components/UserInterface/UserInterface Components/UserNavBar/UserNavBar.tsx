import React from "react";
import { Box } from "@mui/material";
import * as mui from "@mui/material";

const UserNavBar: React.FC = () => {
  return (
    <Box
      sx={{
        height: "75px",
        display: "flex",
        position: "sticky",
        alignItems: "center",
        px: "32px",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="./assets/Icons/menu_icon.svg" />
      </Box>

      <mui.Button
        sx={{
          position: "absolute",
          right: "50%",
          top:"10px",
          transform: "translate(50%)",
          borderRadius: "15px",
          ".MuiTouchRipple-child": {
            backgroundColor: "#44658769",
          },
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <img
          style={{ width: "50px", height: "50px" }}
          src="./assets/logo/logo.svg"
          alt="Logo"
        />
      </mui.Button>

        <Box sx={{
          position:"absolute",
          right:"0px",
          p:"4px 12px 4px 16px",
          borderRadius:"16px 0 0 16px",
          backgroundColor:"#989CA9"
  }}>
        <mui.Typography variant="subtitle2" sx={{color:"white", fontWeight:"bold", letterSpacing:"0.5px"}}>{"Assaf".toUpperCase()}</mui.Typography>
        </Box>
    </Box>
      
  );
};

export default UserNavBar;
