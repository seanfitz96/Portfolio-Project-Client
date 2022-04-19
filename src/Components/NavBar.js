import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import "../CSS/NavBar.css";


function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={"customButton"}
            href="/"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <HomeIcon/>
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Sean Fitzgerald
          </Typography>
          {/* <Button href="/EllesCookies" color="inherit">
            Elle's Cookies
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
