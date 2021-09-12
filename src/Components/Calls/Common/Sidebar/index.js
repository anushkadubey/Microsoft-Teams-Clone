import React from 'react';
import { SidebarData, SidebarDown, SidebarMore } from '../../../../Data/sidebar';
import "./sidebar.css";
import SidebarOption from './sidebarOption';

function Sidebar() {
    const upOptions= SidebarData;
    const more= SidebarMore;
    const downOptions= SidebarDown;
    return (
        <div className="sidebar">
            <div className="sidebarUp">
                <div>
                    {upOptions.map((option)=>{
                        return <SidebarOption option={option} isActive={option.name === "Calls" ? true : false} />;
                    })}
                    </div>
                    <div>
                        <SidebarOption option={more} />
                    </div>
            </div>
            <div className="sidebarDown">
                {downOptions.map((option)=>{
                    return <SidebarOption option={option} />;
                })}
            </div>
        </div>
    );
}

export default Sidebar;
