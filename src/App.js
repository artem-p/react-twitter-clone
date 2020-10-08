import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


function App() {
  return (
    <div className="app">
        <h1>Twitter clone</h1>

        <Sidebar />

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon}  text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
    </div>
  );
}

export default App;
