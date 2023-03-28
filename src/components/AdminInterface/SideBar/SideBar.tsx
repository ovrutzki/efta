import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import { Button, Divider } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { height } from "@mui/system";
import { useDispatch } from "react-redux";
import { getMondayCode } from "../../../store/slicer/mondaySlicer";
import { getDataFromMonday, getMondayData, oauth } from "../../../utils/utils";

const SideBar: React.FC = () => {
  const navigate = useNavigate();
  const [openBar, setOpenBar] = useState({
    left: false,
  });

  

  return (
    <React.Fragment>
      <mui.Container
        sx={{
          position: "absolute",
          left: 0,
          m: 0,
          py: 3,
          width: "10vw",
          height: "100vh",
          display: "flex",
          justifySelf: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <svg
        onClick={getDataFromMonday}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          className="css-1170n61"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
            fill="#007FFF"
          ></path>
        </svg>
        <Button
          onClick={() =>
            setOpenBar({
              left: true,
            })
          }
        >
          Menu
        </Button>
      </mui.Container>

      <mui.Drawer
        open={openBar["left"]}
        onClose={() =>
          setOpenBar({
            left: false,
          })
        }
      >
        <mui.Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          role="presentation"
          onClick={() => setOpenBar({ left: true })}
        >
          <mui.List>
            {[
              [
                "Admin",
                <>
                  <SupervisorAccountIcon />
                </>,
              ],
              ["Gaunt", <CalendarMonthIcon />],
              ["Setting", <SettingsIcon />],
              [
                "Monday",
                <a href="">
                  <img
                    src="./monday-logo-modified.png"
                    style={{ height: "15px" }}
                  />
                </a>,
              ],
            ].map((text, index) =>
              text[0] === "Monday" ? (
                <a href="https://auth.monday.com/oauth2/authorize?client_id=502b3ec84e869c8facdac09d8d8710fd">
                  <mui.ListItem key={index} disablePadding>
                    <mui.ListItemButton>
                      <mui.ListItemIcon>
                        {text[1]}
                        <Divider />
                      </mui.ListItemIcon>
                      <mui.ListItemText primary={text[0]} />
                    </mui.ListItemButton>
                  </mui.ListItem>
                </a>
              ) : (
                <mui.ListItem
                  key={index}
                  onClick={() => {
                    navigate(`/${text[0]}`);
                  }}
                  disablePadding
                >
                  <mui.ListItemButton>
                    <mui.ListItemIcon>
                      {text[1]}
                      <Divider />
                    </mui.ListItemIcon>
                    <mui.ListItemText primary={text[0]} />
                  </mui.ListItemButton>
                </mui.ListItem>
              )
            )}
          </mui.List>
          <mui.List sx={{ justifyContent: "flex-end" }}>
            {[
              ["Log in", <LoginIcon />],
              ["Log out", <LogoutIcon />],
            ].map((text, index) => (
              <mui.ListItem
                key={index}
                onClick={() => navigate(`/${text[0]}`)}
                disablePadding
              >
                <mui.ListItemButton>
                  <mui.ListItemIcon>
                    {text[1]}
                    <Divider />
                  </mui.ListItemIcon>
                  <mui.ListItemText primary={text[0]} />
                </mui.ListItemButton>
              </mui.ListItem>
            ))}
          </mui.List>
        </mui.Box>
      </mui.Drawer>
    </React.Fragment>
  );
};

export default SideBar;
