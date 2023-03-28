import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import { Button, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import { pushingMondayData } from "../../../utils/utils";

export interface IMondayData{
  client_id:string;
  client_secret:string;
  signing_secret:string;
  app_id:string;
  mondayToken:string;
  courseName:string;
}
const AdminSetting: React.FC = () => {
  const [settingSection, setSettingSection] = useState<string>("");
  const [studentInput, setStudentInput] = useState<string>("");
  const [studentArray,setStudentArray] = useState<string[]>([]);
  const [client_id,setClient_id] = useState<string>('')
  const [client_secret,setClient_secret] = useState<string>('')
  const [signing,setSigning_secret] = useState<string>('')
  const [app_id,setApp_id] = useState<string>('')
  const [mondayToken,setMondayToken] = useState<string>('')
  const courseName = "moveobootcamp";
  const [values, setValues] = useState<IMondayData>();

 useEffect(()=>{
  setValues({
    client_id:client_id,
  client_secret:client_secret,
  signing_secret: signing,
  app_id:app_id,
  mondayToken:mondayToken,
  courseName:courseName
  })
 },[client_id,client_secret,signing,app_id,mondayToken])

  const handelSubmit = () =>{
    pushingMondayData(values)
  }
  
  return (
    <>
      <mui.Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
        <SideBar></SideBar>
        <mui.Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifySelf: "center",
            my: 3,
            gap: 3,
          }}
        >
          <mui.Typography sx={{ display: "flex", justifyContent: "center" }}>
            Settings
          </mui.Typography>
          <mui.Box
            sx={{ display: "flex", justifyContent: "center", height: 30 }}
          >
            <mui.Button id="monday" onClick={() => setSettingSection("monday")}>
              Monday Info
            </mui.Button>
            <mui.Button
              id="course-details"
              onClick={() => setSettingSection("course-details")}
            >
              course details
            </mui.Button>
            <mui.Button
              id="notifications"
              onClick={() => setSettingSection("notifications")}
            >
              Notifications
            </mui.Button>
          </mui.Box>
          <mui.Box sx={{ display: "flex" }}>
            {settingSection === "monday" && (
              <mui.FormControl sx={{ gap: 2, alignSelf: "flex-start" }}>
                <mui.TextField onChange={(e) => setClient_id(e.target.value)}
                  label="Client ID"
                  variant="outlined"
                ></mui.TextField>
                <mui.TextField
                onChange={(e) => setApp_id(e.target.value)}
                  label="App ID"
                  variant="outlined"
                ></mui.TextField>
                <mui.TextField onChange={(e) => setClient_secret(e.target.value)} label="Client Secret" variant="outlined"></mui.TextField>
                <mui.TextField onChange={(e) => setSigning_secret(e.target.value)} label="Signing Secret" variant="outlined"></mui.TextField>
                <mui.TextField onChange={(e) => setMondayToken(e.target.value)} label="Monday Token" variant="outlined"></mui.TextField>
                <mui.Button onClick={handelSubmit} type="submit">Submit</mui.Button>
              </mui.FormControl>
            )}

            {settingSection === "course-details" && (
              <mui.FormControl sx={{ gap: 2 }}>
                <mui.TextField label="Course Name" variant="outlined" />
                <mui.TextField label="Class room link" variant="outlined" />
                <mui.Box>
                <mui.TextField onChange={(e) => setStudentInput(e.target.value)} name="student-email" label="Student Email" variant="outlined" />
                <mui.Button onClick={() => setStudentArray(prevArray => [...prevArray, studentInput])}>+</mui.Button>
                </mui.Box>
                {studentArray.map((stu) => <mui.Typography>{stu}</mui.Typography>)}
                <mui.Box>

                </mui.Box>
                <mui.Button type="submit">Submit</mui.Button>
              </mui.FormControl>
            )}
          </mui.Box>
        </mui.Box>
      </mui.Box>
    </>
  );
};

export default AdminSetting;
