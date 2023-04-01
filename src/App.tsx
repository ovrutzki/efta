import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./components/AdminInterface/AdminHomePage/AdminHomePage";
import UserHomePage from "./components/UserInterface/UserHomePage/UserHomePage";
import * as mui from "@mui/material";
import { ThemeProvider } from "@mui/material";
import SignUpLogInComponent from "./components/SignUpLogInComponents/SignUpLogInComponent";
import MondayIntegration from "./components/SignUpLogInComponents/MondayIntegration";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllDays } from "./store/slicers/daysSlicer";
import  AppDispatch  from "./store/store";


const theme = mui.createTheme({
  palette: {
    primary: {
      main: "#893d34",
    },
    secondary: {
      main: "#444d66",
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
}});

function App() {



  return (
    <ThemeProvider theme={theme}>
      <mui.CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/admin" element={<AdminHomePage />} />
            <Route path="/sign-in" element={<SignUpLogInComponent />} />
            <Route path="/monday" element={<MondayIntegration />} />
          </Routes>
        </BrowserRouter>
      </mui.CssBaseline>
    </ThemeProvider>
  );
}

export default App;
