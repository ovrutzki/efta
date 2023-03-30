import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface IInputFieldComponent {
  headline: string;
  widthPercentages?: number;
  placeholder: string;
  questionMarkSrc?: string;
  setValueFunction: (value: string) => void;
  inputType?:string
}

const InputFieldComponent: React.FC<IInputFieldComponent> = (props) => {
  return (<>
    <Box
      sx={{
          width: props.widthPercentages? `${props.widthPercentages}%`:"100%",
          display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: "10px",
      }}
      >
      <Box sx={{ display: "flex", gap: "10px" , alignItems:"center"}}>
        <Typography variant="h5" color="#979CA9" sx={{ fontWeight: "bold" }}>
          {props.headline}
        </Typography>

        {props.questionMarkSrc ? (
          <a style={{all:"unset"}} href={props.questionMarkSrc} target="_blank" >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "50%",
              height: "18px",
              width: "18px",
              color: "white",
              fontWeight: "bold",
              fontSize: "13px",
              backgroundColor:"#979CA9"
            }}
          >
            ?
          </Box></a>
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
            backgroundColor: "#979CA9",
            borderRadius: "10px",
            width: "100%",
            height: "34px",
            py: "4px",
            px: 1,
            fontWeight:"bold",
            letterSpacing:"0.8px"
        }}
      >
        {/* <input
          onChange={(event: any) => props.setValueFunction(event?.target.value)}
          placeholder={props.placeholder}
          type={props.inputType?props.inputType:"text"}
          style={{ all: "unset", width: "100%", color: "white"
        } as any }
        /> */}
        <input
  onChange={(event: any) => props.setValueFunction(event?.target.value)}
  placeholder={props.placeholder}
  type={props.inputType ? props.inputType : "text"}
  style={{
    all: "unset",
    width: "100%",
    color: "white",
    ...(props.inputType === "date" && {
      display:"black",
      appearance: "none",
      WebkitAppearance: "textfield",  
      MozAppearance:"textfield",    
      // backgroundColor: "#fff",
      // border: "1px solid #ccc",
      // borderRadius: "4px",
      // padding: "8px",
      // fontSize: "18px",
      // textAlign: "center",
      width: "100%",
      minHeight:"1.2rem"
    })
  }}
/>

      </Box>
    </Box>
            </>
  );
};

export default InputFieldComponent;
