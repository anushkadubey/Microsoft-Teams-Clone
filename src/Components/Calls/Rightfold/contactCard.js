import React from 'react';
import "./contactCard.css";

function ContactCard({item}) {
    return (
        <div className="contactCard">
            <div className="contactTop">
                <img className="contactAvatar" src={item.avatar} alt=""></img>
                <div className="contactInfo">
                    <label className="contactTitle">{item.name}</label>
                    <label className="contactSubtitle">{item.type}</label>
                </div>
            </div>
            <div className="contactIcons">
            <div className="contactIcon"><i className="fi-rr-microphone"></i></div>
            <div className="contactIcon"><i class="fi-rr-play-alt"></i></div>
            <div className="contactIcon"><i class="fi-rr-menu-dots"></i></div>
            </div>

            
        </div>
    )
}

export default ContactCard;
