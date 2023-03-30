import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import InputFieldComponent from "./InputFieldComponent";

const MondayIntegration: React.FC = () => {
  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

    const navigate = useNavigate()
    
    const [createCourseCode, setCreateCourseCode] = useState("");
      const [boardId, setBoardId] = useState("");
      const [mondayToken, setMondayToken] = useState("");
      const [classroomLink, setClassroomLink] = useState("");
      const [startingDate, setStartingDate] = useState("");
      const [endingDate, setEndingDate] = useState("");

      const createCourseFunction = async () =>{

        console.log(user.token)
        console.log(user)
        try {
          const response = await axios.post(
            "https://efta-back.onrender.com/api/course/addingMonday",
            { mondayToken:mondayToken, boardId:boardId, startDate:startingDate, endDate:endingDate,classRoomLink:classroomLink,courseCode:createCourseCode},
            {headers:{Authorization: `Bearer ${user.token}`}}
          );
          if (response.status === 200) {
            alert(response.data.message);
            navigate("/admin")
          } else {
            alert(response.data);
          }
        } catch (error: any) {
          alert(error.response.data);
        }
      }


      const modifyDate = (date:string) => {
        const dateSplit = date.split("-")
        const printableDate = `${dateSplit[1]}-${dateSplit[2]}-${dateSplit[0]}`
        return printableDate
      }


return(<>
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
      <Box sx={{ my: "30px" }}>
        <img
          style={{ objectFit: "contain", height: "90px" }}
          src="./assets/logo/efta_monday.png"
        />
      </Box>

      <Box sx={{
          width: "90%",
          bgcolor: "#979ca9",
          borderRadius: "16px",
          height: "fit-content",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          display: "flex",
          textAlign: "center",
          p: 2,
        color:"#ffffffdd",
        fontWeight:"bold",
        letterSpacing:"0.8",
        fontSize:"16px"
      }}>With our amazing partner, "Monday.com", we have created a one-step process to generate the whole course just for you!</Box>

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

          <InputFieldComponent
          headline="Monday's token"
          questionMarkSrc="https://support.monday.com/hc/en-us/articles/360005144659-Does-monday-com-have-an-API-"
          placeholder=""
          setValueFunction={setMondayToken}
          />
        <InputFieldComponent
        headline="Board id"
        questionMarkSrc="https://support.monday.com/hc/en-us/articles/360000225709-Board-item-column-and-automation-or-integration-ID-s"
        placeholder=""
        setValueFunction={setBoardId}
        />
        <InputFieldComponent
        headline="Course Code for students"
        placeholder=""
        setValueFunction={setCreateCourseCode}
        />
        <InputFieldComponent
        headline="Classroom Link"
        questionMarkSrc="https://support.google.com/edu/classroom/answer/6020282?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Cinvite-students-with-an-invite-link"
        placeholder=""
        setValueFunction={setClassroomLink}
        />
        <InputFieldComponent
        headline="Course Starting Date"
        inputType="date"
        placeholder=""
        setValueFunction={(value)=>setStartingDate(modifyDate(value))}
        />
        <InputFieldComponent
        headline="Course Ending Date"
        inputType="date"
        placeholder=""
        setValueFunction={(value)=>setEndingDate(modifyDate(value))}
        />
        
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#979CA9",
          "&:active": { backgroundColor: "#979ca9" },
          "&:hover": { backgroundColor: "#979ca98b" },
          marginBottom:"15px"
        }}

        onClick={async()=>{
          createCourseFunction()
        }}
      >
        TAKE ME TO EFTA !
      </Button>
    </Box>
</>

)}

export default MondayIntegration;

