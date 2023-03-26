import React, { useEffect, useState } from "react";
import * as mui from "@mui/material";
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
    toDay:{
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:"red"
    },
    test:{
    
}
})

interface IDayBox{
    daySerialNumber:number;
    dayInTheWeek:number;
}
const DayBox: React.FC<IDayBox> = (props:IDayBox) => {
    const classes = useStyles()
    const dateDay = new Date().getDate();
    const dayNumber = new Date().getDay();
    const boxDate = dateDay + props.daySerialNumber;
    const [dayName, setDayName] = useState<string>("");
    const [today, setToDay] = useState<any>("");
//getting the name of the day
    useEffect(()=>{
        switch (props.dayInTheWeek) {
            case 0:
                setDayName("SU")
                break;
            case 1:
                setDayName("MON")
                break;
            case 2:
                setDayName("TU")
                break;
            case 3:
                setDayName("WE")
                break;
            case 4:
                setDayName("TH")
                break;
            case 5:
                setDayName("FR")
                break;
            case 6:
                setDayName("SA")
                break;
        
            default:
                break;
        }
    },[]);

    useEffect(()=>{
        if(props.dayInTheWeek === dayNumber){
            setToDay(classes.toDay)
        }
    },[])

      return (<>
      <mui.Box >
        <mui.Typography>{dayName}</mui.Typography>
        <mui.Typography className={today}>{boxDate}</mui.Typography>
        <mui.Typography></mui.Typography>
      </mui.Box>
        </>
      )
    }

export default DayBox;