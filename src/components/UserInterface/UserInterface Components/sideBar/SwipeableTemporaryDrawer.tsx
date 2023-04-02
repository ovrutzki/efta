import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IOpenSideBar {
  toggle: boolean;
  setToggle: any;
}

export const SwipeableTemporaryDrawer: React.FC<IOpenSideBar> = (props) => {
  const [state, setState] = React.useState(false);

  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const getDataFromMonday = async () => {
    try {
      const response = await axios.get(
        "https://efta-back.onrender.com/api/monday/getData",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
      props.setToggle(open);
    };

  const navigate = useNavigate();

  const list = () => (
    <Box
      sx={{ width: "300px", my:"20px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", iconLink: "./assets/logo/logo.png", function: "/" },
          { text: "Sync monday.com", iconLink: "./assets/Icons/buttonsIcons/monday_icon.png", function: "" },
          { text: "Change settings", iconLink: "./assets/Icons/buttonsIcons/settings_logo.png", function: "/monday" },
          { text: "Log-out", iconLink: "./assets/Icons/buttonsIcons/log_out_icon.png", function: "" },
        ].map((item, index) => {
          if ( item.text !== "Sync monday.com" || (item.text === "Sync monday.com" && user ? user.userInfo.role==="admin" :false) ) {
            return (
              <>
                <>{item.text === "Change settings" ? <Divider /> : <></>}</>
                <ListItem
                  key={index}
                  onClick={() => {
                    if (item.text === "Sync monday.com") {
                      getDataFromMonday();
                      console.log("syncing monday data");
                    } else if (item.text === "Log-out") {
                        navigate("/sign-in")
                      sessionStorage.removeItem("user");
                    } else {
                      navigate(item.function);
                    }
                  }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={item.iconLink} style={{ height: "30px", objectFit:"cover", width:"30px" }} />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </>
            );
          } else {
            return null;
          }
        })}
      </List>
    </Box>
  );

  useEffect(() => {
    setState(props.toggle);
  }, [props.toggle]);

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
