import React from 'react';
import "./calls.css";
import Header from "./Common/Header";
import Sidebar from './Common/Sidebar';
import LeftFold from './Leftfold';
import RightFold from './Rightfold';
function Calls() {
    return (
        <div className="callsContainer">
            <Header />
        <div className="callsBody">
        <div className="callsSidebar">
            <Sidebar />
        </div>
        <div className="callsLeft">
            <LeftFold />
        </div>
        <div className="callsRight">
            <RightFold />
        </div>
        </div>
        </div>
    )
}

export default Calls;
