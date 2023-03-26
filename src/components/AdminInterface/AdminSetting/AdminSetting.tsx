import React, { useState } from "react";
import * as mui from "@mui/material";
import { Button, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SideBar from "../SideBar/SideBar";

const AdminSetting: React.FC = () => {
  const [settingSection, setSettingSection] = useState<string>("");

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
                <mui.TextField
                  label="Client ID"
                  variant="outlined"
                ></mui.TextField>
                <mui.TextField
                  label="App ID"
                  variant="outlined"
                ></mui.TextField>
                <mui.TextField label="Client Secret" variant="outlined"></mui.TextField>
                <mui.TextField label="Signing Secret" variant="outlined"></mui.TextField>
                <mui.TextField label="Token" variant="outlined"></mui.TextField>
                <mui.Button type="submit">Submit</mui.Button>
              </mui.FormControl>
            )}

            {settingSection === "course-details" && (
              <mui.FormControl sx={{ gap: 2 }}>
                <mui.TextField label="Course Name" variant="outlined" />
                <mui.TextField label="Class room link" variant="outlined" />
                <mui.TextField label="Student Email" variant="outlined" />
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
