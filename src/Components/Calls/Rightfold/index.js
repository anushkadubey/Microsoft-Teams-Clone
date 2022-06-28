import React from 'react';
import { CallsContact } from '../../../Data/calls';
import ContactCard from './contactCard';
import "./right.css";

function RightFold() {
    const contacts= CallsContact;
    return (
        <div className="rightFold">
            <div className="rightfoldHeading">
            <label className="headingLabel">Contacts</label>
            </div>
            <div className="rightfoldOptions">
                <div className="contactSearch">
                    <input placeholder="Find a contact"></input>
                    <div className="contactsearchIcon">
                    <i className="fi fi-br-search"></i>
                    </div>
                    </div>
                    <div className="addButton">
                        <div className="addIcon">
                        <i className="fi fi-br-user-add"></i>
                    </div>
                    <label className="addLabel">Add Contact</label>
                </div>
            </div>
            <div className="contactList">
                {contacts.map((item)=>{
                    return <ContactCard item={item} />
                })}
            </div>
        </div>
    )
}

export default RightFold;
