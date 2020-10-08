import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/Notifications";


function App() {
  return (
    <div className="app">
        <h1>Twitter clone</h1>

        <Sidebar />

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon}  text="Notifications"/>
        {/* <SidebarOption /> */}
        {/* <SidebarOption /> */}
    </div>
  );
}

export default App;
