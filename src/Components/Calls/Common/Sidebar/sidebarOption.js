import React from 'react';
import "./sidebarOption.css";

function SidebarOption({option, isActive}) {
    const classList= isActive  ? "sidebarOption active" : "sidebarOption";
    return (
        <div className={classList}>
            <div className="sidebarIcon">{option.icon}</div>
            {option.name&& <label className="sidebarLabel">{option.name}</label>}
        </div>
    )
}

export default SidebarOption;
