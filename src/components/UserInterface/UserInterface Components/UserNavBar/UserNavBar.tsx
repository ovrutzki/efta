import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import * as mui from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SwipeableTemporaryDrawer } from "../sideBar/SwipeableTemporaryDrawer";




const UserNavBar: React.FC = () => {
  const navigate = useNavigate()
  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
console.log(user)

useEffect(()=>{ if(!user){navigate("/sign-in")} },[])


  const [toggle, setToggle] = useState(false)
  return (<>
    <Box
      sx={{
        height: "80px",
        display: "flex",
        position: "sticky",
        alignItems: "center",
        px: "32px",
      }}
    >
      <Box

        onClick={()=>{
          setToggle((prev)=>!prev)
          
        }}

        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover":{cursor:"pointer"}
        }}
      >
        <img src="./assets/Icons/menu_icon.svg" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: "50%",
          top:"1px",
          transform: "translate(50%)",
          borderRadius: "15px",
        }}
      >
        <img
          style={{height: "65px", objectFit:"contain" }}
          src="./assets/logo/full_logo.png"
          alt="Logo"
        />
      </Box>

        <Box sx={{
          position:"absolute",
          right:"0px",
          p:"4px 12px 4px 16px",
          borderRadius:"16px 0 0 16px",
          backgroundColor:"#989CA9"
        }}>
        {/* <mui.Typography variant="subtitle2" sx={{color:"white", fontWeight:"bold", letterSpacing:"0.5px"}}>{user ? user.userInfo.name.toUpperCase(): "NAME"}</mui.Typography> */}
        <mui.Typography variant="subtitle2" sx={{color:"white", fontWeight:"bold", letterSpacing:"0.5px"}}>{ "NAME"}</mui.Typography>
        </Box>
    </Box>

        <SwipeableTemporaryDrawer toggle={toggle} setToggle={setToggle}/>

    </>
  );
};

export default UserNavBar;
