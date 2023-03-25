import React, { useEffect } from "react";
import * as mui from "@mui/material";
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
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";

const UpperUserCalendar: React.FC = () => {

    const today = dayjs().format("MM-DD-YYYY");
    const [selectedDateAndPrev, setSelectedDayAndPrev] = React.useState([today,today]);
    const [open, setOpen] = React.useState(false);
    const [month, setMonth] = React.useState<String>(dayjs().format("MMMM"));
    const [year, setYear] = React.useState<number>(dayjs().year());
    const [temporaryChange, setTemporaryChange] = React.useState<[String,Number]>([month,year]);
    const daysInMonth = dayjs(`${month} ${year}`, "MMMM YYYY").daysInMonth();


    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const day = dayjs(`${month}-${i}-${year}`);
      const dayOfWeek = day.format("dd");
      const paddedDay = i < 10 ? `0${i}` : `${i}`;
      daysArray.push([paddedDay, dayOfWeek]);
    }

    useEffect(() => {
        const element = document.getElementById(selectedDateAndPrev[1]);
        const oldElement = document.getElementById(selectedDateAndPrev[0]);
        if (element && oldElement) {
          if (element !== oldElement){
          element.style.backgroundColor = "#4E4E61";
          oldElement.style.backgroundColor = "#989CA9";
          }
        }
        console.log(selectedDateAndPrev)
      }, [selectedDateAndPrev,month,year]);


  const months:Array<[string, number]> = [];

  for (let month = 0; month < 12; month++) {
    const monthDate = dayjs().year(year).month(month);
    const monthName = monthDate.format("MMMM");
    months.push([monthName,month]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent<unknown>,
    reason?: string
    ) => {
        if (reason !== "backdropClick") {
            setOpen(false);

        setMonth(temporaryChange[0])
        setYear(Number(temporaryChange[1]))
        setSelectedDayAndPrev(["",""])
    }
  };
  return (
    <>
      {/* today button + month picker */}
      <Box
        sx={{
          display: "flex",
          height: "70px",
          alignItems: "center",
          justifyContent: "space-between",
          px: "20px",
          border: "1px black solid",
        }}>
        <Button
          variant="contained"
          sx={{
            boxShadow: "none",
            width: "60px",
            height: "32px",
            backgroundColor: "primary.light",
            borderRadius: "16px",
            fontWeight: "400",
            "&:hover": { backgroundColor: "primary.light" },
          }}>
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
          }}>
          {month} ⌵
        </Button>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle sx={{color:"secondary.main"}}>Change Month / Year</DialogTitle>
          <DialogContent>
            <Box component="form" sx={{ display: "flex" }}>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Month</InputLabel>
                <Select
                  native
                  value={temporaryChange[0]}
                  onChange={(event)=>{setTemporaryChange(prev => [event.target.value,prev[1]])}}

                  input={<OutlinedInput label="Month" />}>
                    {months.map((month)=>{return <option value={month[0]}>{`${month[0]} - ` + (Number(month[1])+1)}</option>})}


                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel>Year</InputLabel>
                <Select
                  native
                  value={temporaryChange[1]}
                  onChange={(event)=>{setTemporaryChange(prev => [prev[0], Number(event.target.value)])}}
                  input={<OutlinedInput label="Year" />}>
                    {[dayjs().year(), dayjs().year()+1].map((year)=>{return <option value={year}>{year}</option>})}


                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button sx={{color:"secondary.main"}} onClick={handleClose}>OK</Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* Day scrolling picker */}
      <Box sx={{border:"1px purple solid", height: "105px",display:"fixed", gap:"6px",  alignItems:"center", overflow:"scroll"}}>
        {daysArray.map((day)=>{
        let monthInNum = "";
        for (let i in months){
            if (months[i][0] === month){
                if ((months[i][1]+1) < 10 ){
                    monthInNum=`0${months[i][1]+1}`;
                } else{monthInNum=`${months[i][1]+1}`}
                break;
            }
        }
            return(
                <Box id={`${monthInNum}-${day[0]}-${year}`} onClick={()=>(setSelectedDayAndPrev((prev) => [prev[1],`${monthInNum}-${day[0]}-${year}`]))} sx={{display:"flex", textAlign:"center",flexDirection:"column",alignItems:"center", justifyContent:"space-between",py:"5px",width:"47px", height:"100px", backgroundColor:"#989CA9", borderRadius:"16px"}}>
                    <Box >
                    <Typography variant="h6" sx={{color:"white", fontWeight:"500",position:"relative"}}>{day[0]}<Typography variant="subtitle2" sx={{color:"white",fontSize:"11px", fontWeight:"300",position:"absolute", bottom:"-13px", left:"50%", transform:"translate(-50%)", letterSpacing:"0.5px"}}>{day[1]}</Typography></Typography>
                    </Box>

                </Box>
            )
        })}
      </Box>
    </>
  );
};

export default UpperUserCalendar;
