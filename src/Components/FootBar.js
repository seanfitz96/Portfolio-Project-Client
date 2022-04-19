import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "../CSS/FootBar.css";


function FootBar() {
  return (
      <AppBar position="static">
            <div className="FootBarCopyright">
                <Toolbar>                    
                    © 2022 Sean Fitzgerald || Portfolio is a WIP
                </Toolbar>
            </div>
      </AppBar>
  );
}

export default FootBar;
