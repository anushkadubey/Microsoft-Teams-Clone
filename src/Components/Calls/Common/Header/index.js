import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="header">
        <div className="headerMenu">
        <i className="fi-rr-layout-fluid"></i>
        </div>
        <div className="headerLeft">
            <label className="headerLabel">Microsoft Teams</label>
        </div>
        <div className="headerRight">
            <div className="headerSearch">
            <i className="fi-rr-search"></i>
            <input placeholder="Search"></input>
            </div>
            <div className="headerProfile">
                <div className="headerOptions">
                <i className="fi-rr-menu-dots"></i>
                </div>
                <img className="headerAvatar" src="https://image.flaticon.com/icons/png/128/2922/2922561.png" alt=""></img>
            </div>
        </div>
        </div>
    )
}

export default Header;
