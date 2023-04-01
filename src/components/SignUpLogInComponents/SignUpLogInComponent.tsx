import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputFieldComponent from "./InputFieldComponent";

const SignUpLogInComponent: React.FC = () => {

  const navigate = useNavigate()

  const [toggleValue, setToggleValue] = useState("log_in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [courseAdminCode, setCourseAdminCode] = useState("");

// useEffect(()=>{
//     setEmail("")
//     setPassword("")
//     setFirstName("")
//     setLastName("")
//     setPhoneNumber("")
//     setCourseAdminCode("")
// },[toggleValue])

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


  const logInFunction = async () =>{
    try {
      const response = await axios.post(
        "https://efta-back.onrender.com/api/users/logIn",
        { email:email, password:password },
        {
          headers: {
            'Content-Type': 'application/json'
          }}
      );
      if (response.status === 200) {
        sessionStorage.setItem("user", JSON.stringify({token: response.data.token ,userInfo:response.data.user  }));

        alert(response.data.message);

        if (response.data.admin && response.data.haveCourse){
          navigate("/admin")
        }else if (response.data.admin){
          navigate("/monday")
        }else{
          navigate("/")
        }
      } else {
        alert(response.data);
      }
    } catch (error: any) {
      alert(error.response.data);
    }
  }

  const signUpFunction = async () =>{
    try {
      const response = await axios.post(
        "https://efta-back.onrender.com/api/users/signUp",
        { email:email, password:password,name:firstName, lastName:lastName, phone:phoneNumber, code:courseAdminCode },
        {
          headers: {
            'Content-Type': 'application/json'
          }}
      );
      if (response.status === 200) {
        alert(response.data.message);
        setToggleValue("log_in")
      } else {
        alert(response.data);
      }
    } catch (error: any) {
      alert(error.response.data);
    }
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: 'url("/assets/mainBG/signin_background_vector.svg")',
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "auto",
      }}
    >
      <Box sx={{ my: "20px" }}>
        <img
          style={{ objectFit: "contain", height: "110px" }}
          src="./assets/logo/big_logo.png"
        />
      </Box>

      <Box
        sx={{
          px: 1,
          gap: 1,
          width: "fit-content",
          height: "50px",
          display: "flex",
          justifyContent: "space-around",
          bgcolor: "#EBEBEC",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        }}
      >
        <Box
          sx={{
            ...button_sx,
            bgcolor: toggleValue === "sign_up" ? "none" : "#989CA9",
            color: toggleValue === "sign_up" ? "#989CA9" : "white",
          }}
          onClick={() => {
            setToggleValue("log_in");
          }}
        >
          LOG IN
        </Box>
        <Box
          sx={{
            ...button_sx,
            bgcolor: toggleValue === "log_in" ? "none" : "#989CA9",
            color: toggleValue === "log_in" ? "#989CA9" : "white",
          }}
          onClick={() => {
            setToggleValue("sign_up");
          }}
        >
          SIGN UP
        </Box>
      </Box>

      <Box
        sx={{
          my: "20px",
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
          gap: "10px",
        }}
      >
        {toggleValue === "log_in" ? (
          <>
            <InputFieldComponent
              headline="Email"
              placeholder=""
              setValueFunction={setEmail}
            />
            <InputFieldComponent
              headline="Password"
              inputType="password"
              placeholder=""
              setValueFunction={setPassword}
            />
          </>
        ) : (
          <>
            <InputFieldComponent
              headline="First Name"
              placeholder=""
              setValueFunction={setFirstName}
            />
            <InputFieldComponent
              headline="Last Name"
              placeholder=""
              setValueFunction={setLastName}
            />
            <InputFieldComponent
              headline="Phone Number"
              placeholder=""
              setValueFunction={setPhoneNumber}
            />
            <InputFieldComponent
              headline="Email"
              placeholder=""
              setValueFunction={setEmail}
            />
            <InputFieldComponent
              headline="Password"
              inputType="password"
              placeholder=""
              setValueFunction={setPassword}
            />
            <InputFieldComponent
              headline="Course / Admin Code"
              placeholder=""
              setValueFunction={setCourseAdminCode}
            />
          </>
        )}
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#979CA9",
          "&:active": { backgroundColor: "#979ca9" },
          "&:hover": { backgroundColor: "#979ca98b" },
          marginBottom:"20px"
        }}

        onClick={ async ()=>{
                if (toggleValue==="log_in"){
                  console.log(email,password)
                  logInFunction()

                  console.log("log in")
                }else{
                  signUpFunction()
                    console.log("sign up")
                }

        }}
      >
        SUBMIT
      </Button>
    </Box>
  );
};

export default SignUpLogInComponent;
