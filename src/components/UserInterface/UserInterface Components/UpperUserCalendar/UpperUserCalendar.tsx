import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import  {filterSelectedDateDataInSlicer, filterIsWeekend} from "../../../../store/slicers/daysSlicer"
import { RootState } from "../../../../store/store";

const UpperUserCalendar: React.FC = () => {

  
  const today = dayjs().format("MM-DD-YYYY");
  const [selectedDate, setSelectedDay] = React.useState(today);
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState<String>(dayjs().format("MMMM"));
  const [year, setYear] = React.useState<number>(dayjs().year());
  const [temporaryChange, setTemporaryChange] = React.useState<
    [String, Number]
  >([month, year]);

  const dispatch = useDispatch();

  const data_is_ready = useSelector((state:RootState)=> state.days.is_data_ready)
  const dates_with_data = useSelector((state:RootState)=> state.days.dates_with_data)

  useEffect(()=>{
    dispatch(filterSelectedDateDataInSlicer(selectedDate))
    for(let i = 0; i<daysArray.length;i++){
      if(daysArray[i][0] == selectedDate.split("-")[1]){
        if (daysArray[i][1] === "Fr" || daysArray[i][1] === "Sa" ){
          console.log("weekend")
          dispatch(filterIsWeekend(true))
          break;
        }
      }
      dispatch(filterIsWeekend(false))
    }
},[data_is_ready,selectedDate])



  useEffect(() => {

      setTimeout(() => {
        let day_to_scroll = document.getElementById(selectedDate);
        if (day_to_scroll !== null) {
          day_to_scroll.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      }, 200);
    }, [selectedDate]);

  const months: Record<string, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const daysInMonth = new Date(year, months[`${month}`], 0).getDate();
  const daysArray:any = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, months[`${month}`] - 1, day);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
    daysArray.push([day.toString().padStart(2, "0"), dayOfWeek.slice(0, 2)]);
  }

  const handleTodayButton = () => {
    setSelectedDay(today);
    setMonth(dayjs().format("MMMM"));
    setYear(dayjs().year());
    setTemporaryChange([dayjs().format("MMMM"), dayjs().year()]);
    let day_to_scroll = document.getElementById(today);
    if (day_to_scroll !== null) {
      day_to_scroll.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
  ) => {
    if (reason !== "backdropClick") {
      setOpen(false);

      setMonth(temporaryChange[0]);
      setYear(Number(temporaryChange[1]));
    }
  };

  return (
    <>
      {/* today button + month picker */}
      <Box
        sx={{
          display: "flex",
          height: "60px",
          alignItems: "center",
          justifyContent: "space-between",
          px: "20px",
        }}
      >
        <Button
          onClick={() => {
            handleTodayButton();
          }}
          variant="contained"
          sx={{
            boxShadow: "none",
            width: "60px",
            height: "32px",
            // backgroundColor: "primary.light",
            backgroundColor: "#B7887D",
            borderRadius: "16px",
            fontWeight: "400",
            // "&:hover": { backgroundColor: "primary.light" },
            "&:hover": { backgroundColor: "#B7887D" },
          }}
        >
          Today
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={{
            boxShadow: "none",
            width: "fit-content",
            px: "15px",
            height: "32px",
            backgroundColor: "secondary.light",
            borderRadius: "16px",
            fontWeight: "400",
            "&:hover": { backgroundColor: "secondary.light" },
          }}
        >
          {month} ⌵
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle sx={{ color: "secondary.main" }}>
            Change Month / Year
          </DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex" }}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Month</InputLabel>
                <Select
                  native
                  value={temporaryChange[0]}
                  onChange={(event) => {
                    setTemporaryChange((prev) => [event.target.value, prev[1]]);
                  }}
                  input={<OutlinedInput label="Month" />}
                >
                  {Object.entries(months).map((month) => {
                    return (
                      <option value={month[0]}>
                        {`${month[0]} - ` + Number(month[1])}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Year</InputLabel>
                <Select
                  native
                  value={temporaryChange[1]}
                  onChange={(event) => {
                    setTemporaryChange((prev) => [
                      prev[0],
                      Number(event.target.value),
                    ]);
                  }}
                  input={<OutlinedInput label="Year" />}
                >
                  {[dayjs().year(), dayjs().year() + 1].map((year) => {
                    return <option value={year}>{year}</option>;
                  })}
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button sx={{ color: "secondary.main" }} onClick={handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* Day scrolling picker */}
      <Box
        sx={{
          marginTop:"10px",
          height: "110px",
          display: "fixed",
          px: "5px",
          alignItems: "start",
          overflow: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {daysArray.map((day:any) => {
          let month_for_box =
            months[`${month}`] < 10
              ? `0${months[`${month}`]}`
              : `${months[`${month}`]}`;

              let is_study_day:boolean = false;
              let is_weekend:boolean = false;
              if (dates_with_data.includes(`${month_for_box}-${day[0]}-${year}`)){
                is_study_day = true
                if(day[1] ==="Fr" || day[1] ==="Sa"){
                  is_weekend = true;
                  is_study_day = false
                }
              }
          return (
            <Box
            id={`${month_for_box}-${day[0]}-${year}`}
              onClick={() =>{
                if (is_study_day || is_weekend){
                  setSelectedDay(`${month_for_box}-${day[0]}-${year}`)
                }
              }
              }
              sx={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "5px",
                mx: "3px",
                paddingBottom: "15px",
                width: "47px",
                height: "100px",
                backgroundColor:
                  selectedDate === `${month_for_box}-${day[0]}-${year}`
                    ? "#4E4E61"
                    : is_study_day? "#989CA9" : is_weekend ? "#28746b45" : "#d956474d",
                borderRadius: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontWeight: "500", position: "relative" }}
              >
                {day[0]}
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "white",
                    fontSize: "11px",
                    fontWeight: "300",
                    position: "absolute",
                    bottom: "-13px",
                    left: "50%",
                    transform: "translate(-50%)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {day[1]}
                </Typography>
              </Typography>
              {is_study_day || is_weekend?<></>:<img src="./assets/Icons/no_info_icon.svg" style={{height:"20px"}}/>}
              {is_weekend? <img src="./assets/Icons/holiday_icon.png" style={{height:"20px"}}/>  :<></>}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default UpperUserCalendar;
