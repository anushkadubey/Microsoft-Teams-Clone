import React from 'react';
import "./menuItem.css";

function MenuItem({item, isActive}) {
    const classList= isActive? "itemActive menuItem" : "menuItem";
    return (
        <div className={classList}>
            <div className="itemIcon">{item.icon}</div>
            <label className="itemLabel">{item.name}</label>
        </div>
    );
}

export default MenuItem;
