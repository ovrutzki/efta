import React from "react";
import * as mui from "@mui/material";
import { Box, Typography } from "@mui/material";
import TodaysInformationButton from "./TodaysInformationButtton";

const square_box_sx = {
  borderRadius: "16px",
  my: "10px",
  height: "135px",
  width: "165px",
  backgroundColor: "#C7CAD2",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  border: " 0.5px solid #4e4e6056",
  position: "relative",
};

const icon_box_sx = {
  position: "relative ",
  width: "fit-content",
  top: "7px",
  left: "7px",
};
const typography_box_sx = {
  position: "relative",
  left: "10px",
  top: "10px",
  width: "75%",
  height: "50%",
};
const typography_design_sx = {
  color: "white",
  fontWeight: "bold",
  letterSpacing: "0.5px",
  fontSize: "20px",
};
const TodaysInformation: React.FC = () => {
  return (
    <>
      {/* 4 squares */}

      <Box
        sx={{
          width: "90vw",
          height: "fit-content",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ ...square_box_sx }}>
          <Box sx={{ ...icon_box_sx }}>
            <img
              style={{ width: "32px", height: "32px" }}
              src="./assets/Icons/map_icon.svg"
            />
          </Box>
          <Box sx={{ ...typography_box_sx }}>
            <Typography variant="h4" sx={{ ...typography_design_sx }}>
              Ahad ha'am 21, TLV
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
            }}
          >
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/navigation_icon.svg"
              padding={8}
              width={28}
              height={28}
              radius={10}
              onClick={() => {
                console.log("yes");
              }}
            />
          </Box>
        </Box>
        <Box sx={{ ...square_box_sx }}>
          <Box sx={{ ...icon_box_sx }}>
            <img
              style={{ width: "32px", height: "32px" }}
              src="./assets/Icons/clock_icon.svg"
            />
          </Box>
          <Box sx={{ ...typography_box_sx }}>
            <Typography variant="h4" sx={{ ...typography_design_sx }}>
              09:00 AM - 18:00 PM
            </Typography>
          </Box>
        </Box>
        <Box sx={{ ...square_box_sx }}>
          <Box sx={{ ...icon_box_sx }}>
            <img
              style={{ width: "32px", height: "32px" }}
              src="./assets/Icons/mentor_icon.svg"
            />
          </Box>
          <Box sx={{ ...typography_box_sx }}>
            <Typography variant="h4" sx={{ ...typography_design_sx }}>
              Yarden
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              position: "absolute",
              right: "10px",
              bottom: "10px",
            }}
          >
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/whatsapp_icon.svg"
              padding={8}
              width={28}
              height={28}
              radius={10}
              onClick={() => {
                console.log("yes");
              }}
            />
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/calling_icon.svg"
              padding={8}
              width={28}
              height={28}
              radius={10}
              onClick={() => {
                console.log("yes");
              }}
            />
          </Box>
        </Box>
        <Box sx={{ ...square_box_sx }}>
          <Box sx={{ ...icon_box_sx }}>
            <img
              style={{ width: "38px", height: "32px" }}
              src="./assets/Icons/google_meet_icon.svg"
            />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "55px",
                width: "100%",
                height: "fit-content",
                display:"flex",
                gap:"10px",
                justifyContent:"center"
              }}
            >
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/external_link_icon.svg"
              padding={15}
              width={50}
              height={50}
              radius={16}
              onClick={() => {
                console.log("yes");
              }}
            />
                        <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/copy_icon.svg"
              padding={15}
              width={50}
              height={50}
              radius={16}
              onClick={() => {
                console.log("yes");
              }}
            />
            </Box>
        </Box>
      </Box>

      {/* lectures today  */}
    </>
  );
};

export default TodaysInformation;
