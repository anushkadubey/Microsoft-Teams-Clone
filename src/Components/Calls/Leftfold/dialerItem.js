import React from 'react';
import "./dialerItem.css";

function DialerItem({item}) {
    return (
        <div className="dialerItem">
            <img className="itemAvatar" src={item.avatar} alt=""></img>
            <div className="itemInfo">
                <label className="itemTitle">{item.name}</label>
                <label className="itemSubtitle">{item.type}</label>
            </div>
            <div className="itemIcons">
            <div className="itemIcon"><i className="fi fi-br-microphone"></i></div>
            <div className="itemIcon"><i className="fi fi-br-play-alt"></i></div>
            </div>
        </div>
    )
}

export default DialerItem
