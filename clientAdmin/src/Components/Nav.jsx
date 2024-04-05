import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar, Tooltip } from "@mui/material";
const Nav = () => {
  return (
    <div className="navigation_bar">
      <div className="left_nav">
        <p>Vanta Admin</p>
      </div>
      <div className="right_nav">
        <Tooltip title="Search">
          <SearchRoundedIcon sx={{ fontSize: "25px", cursor: "pointer" }} />
        </Tooltip>
        <Tooltip title="Notifications">
          <NotificationsNoneIcon sx={{ fontSize: "25px", cursor: "pointer" }} />
        </Tooltip>
        <Tooltip title="Profile">
          <Avatar sx={{ fontSize: "25px", cursor: "pointer" }} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Nav;
