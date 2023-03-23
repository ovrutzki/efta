import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./components/AdminInterface/AdminHomePage/AdminHomePage";
import UserHomePage from "./components/UserInterface/UserHomePage/UserHomePage";
import * as mui from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = mui.createTheme({
  palette: {
    primary: {
      main: "#893d34",
    },
    secondary: {
      main: "#444d66",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <mui.CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHomePage />} />
            <Route path="/admin" element={<AdminHomePage />} />
          </Routes>
        </BrowserRouter>
      </mui.CssBaseline>
    </ThemeProvider>
  );
}

export default App;
