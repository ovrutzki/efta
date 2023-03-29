import React from "react";
import * as mui from "@mui/material";
import { Box, Typography } from "@mui/material";

interface ITodaysInformationButtonProps {
  src: string;
  width: number;
  height: number;
  radius: number;
  padding: number;
  onClick?: () => void;
  href?:string;
  shadow?:boolean
}

const TodaysInformationButton: React.FC<ITodaysInformationButtonProps> = (
  props
) => {
  return (
    <a target="_blank" href={props.href} style={{all:"unset"}}>

    <Box
      sx={{
        border: "0.5px solid #4e4e6028",
        backgroundColor: "#9c9fa8",
        borderRadius: `${props.radius}px`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: props.shadow===false ?"none":"0px 4px 4px rgba(0, 0, 0, 0.25);",
        "&:active":{backgroundColor: "#bfc2cb", scale:"0.95"}
      }}
      >
      <button
        style={{
          all: "unset",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.onClick}
      >
        <img
          style={{
            width: `${props.width - props.padding}px`,
            height: `${props.height - props.padding}px`,
          }}
          src={props.src}
          />
      </button>
    </Box>
          </a>
  );
};

export default TodaysInformationButton;
