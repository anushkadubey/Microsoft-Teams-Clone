import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="header">
        <div className="headerMenu">
        <i className="fi fi-br-layout-fluid"></i>
        </div>
        <div className="headerLeft">
            <label className="headerLabel">Microsoft Teams</label>
        </div>
        <div className="headerRight">
            <div className="headerSearch">
            <i className="fi fi-br-search"></i>
            <input placeholder="Search"></input>
            </div>
            <div className="headerProfile">
                <div className="headerOptions">
                <i className="fi fi-br-menu-dots"></i>
                </div>
                <img className="headerAvatar" src="https://img.icons8.com/color/344/pretty-woman.png" alt=""></img>
            </div>
        </div>
        </div>
    )
}

export default Header;
