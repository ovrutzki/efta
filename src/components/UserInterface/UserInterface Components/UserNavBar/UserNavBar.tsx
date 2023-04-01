import React from "react";
import { Box } from "@mui/material";
import * as mui from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchAllDays } from "../../../../store/slicers/daysSlicer";

const userString = sessionStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

const getDataFromMonday = async () => {
  try {
    const response = await axios.get("https://efta-back.onrender.com/api/monday/getData",{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

interface IUserRole{
  role:string
}

const UserNavBar: React.FC<IUserRole> = (props) => {


  const navigate = useNavigate()
  return (
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
          getDataFromMonday()
          if (props.role==="admin"){
            console.log("Admin side bar")
          }else if (props.role==="user"){
            console.log("user side bar");

          }
        }}

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
        <mui.Typography onClick={()=>{props.role === "admin" ? navigate("/"):navigate("/admin")}} variant="subtitle2" sx={{color:"white", fontWeight:"bold", letterSpacing:"0.5px"}}>{"Assaf".toUpperCase()}</mui.Typography>
        </Box>
    </Box>

  );
};

export default UserNavBar;
