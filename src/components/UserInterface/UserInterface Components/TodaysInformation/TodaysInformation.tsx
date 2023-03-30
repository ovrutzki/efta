import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import { Box, Typography } from "@mui/material";
import TodaysInformationButton from "./TodaysInformationButtton";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../../../store/store";
import IDay from "../../../types/interfaces/interfaces";

const square_box_sx = {
  borderRadius: "16px",
  marginBottom: "15px",
  height: "135px",
  // width: "165px",
  width: "calc((100% - 15px)/2)",

  backgroundColor: "#C7CAD2",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  border: "0.5px solid #4e4e6056",
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

  const dayData = useSelector((state:RootState)=> state.days.TodaysValue)

  const navigationLink = (address:string) => {
    const googleApiLink =  "https://www.google.com/maps/search/?api=1&query="
    const punctRegex = /[ ,.:;]/g;
    const organizedAddress = address.split(punctRegex).join("+");
    
    // const organizedAddress = address.split(", ").join("+")
    console.log(organizedAddress)
    return `${googleApiLink}${organizedAddress}`
  }
  

  return (
    <>
      {/* 4 squares */}

      <Box
        sx={{width:"90%",
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
              {dayData.address}
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
              href={navigationLink(dayData.address)}
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
              {`${dayData.hours[0]} - ${dayData.hours[1]}`}
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
              {dayData.mentorName}
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
              href={"https://www.whatsapp.com"}
            />
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/calling_icon.svg"
              padding={8}
              width={28}
              height={28}
              radius={10}
              onClick={() => {
                console.log(`calling ${dayData.mentorPhone}`);
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
              top: "60px",
              width: "100%",
              height: "fit-content",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/external_link_icon.svg"
              padding={15}
              width={50}
              height={50}
              radius={16}
              href={`${dayData.googleMeet}`}
            />
            <TodaysInformationButton
              src="./assets/Icons/buttonsIcons/copy_icon.svg"
              padding={15}
              width={50}
              height={50}
              radius={16}
              onClick={() => {
                console.log(`copied ${dayData.googleMeet}`);
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* lectures today  */}

      <Box
        sx={{
          borderRadius: "16px",
          marginBottom: "15px",
          minHeight: "50px",
          width: "90%",
          backgroundColor: "#C7CAD2",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          border: " 0.5px solid #4e4e6056",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <img
            style={{ width: "32px", height: "32px" }}
            src="./assets/Icons/teacher_icon.svg"
          />

          <TodaysInformationButton
            src="./assets/Icons/buttonsIcons/google_classroom_icon.svg"
            padding={10}
            width={40}
            height={40}
            radius={13}
            href={`${dayData.dailyClassRoom}`}
          />
        </Box>

        {dayData.events.map((event) => {
          return (
            <Box
              sx={{
                width: "98%",
                py: 1,
                px: "12px",
                my: "4px",
                borderRadius: "16px",
                // backgroundColor: "#9c9fa865",
                // boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.14);",
                border: " 2px solid #b7b4b47b",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "bold" }}
              >
                {event.eventName}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TodaysInformation;
