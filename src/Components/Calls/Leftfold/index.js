import React from 'react';
import { CallsMenu, DialerList } from '../../../Data/calls';
import "./left.css";
import MenuItem from './menuItem';
import DialerItem from './dialerItem';

function LeftFold() {
    const menu = CallsMenu;
    const dialerList = DialerList;
    return (
        <div className="leftFold">
         <div className="leftfoldMenu">
             <label className="menuLabel">Calls</label>
             <div className="menuItems">
                 {menu.map((item)=>{
                     return <MenuItem item={item} />
                 })}
             </div>
         </div>
         <div className="leftfoldDialer">
                 <label className="dialerLabel">Make a call</label>
                 <div className="dialerSearch">
                     <input placeholder="Type a name"></input>
                 </div>
                 <div>
                    <div className="dialerSuggested">
                        <label className="suggestedLabel"></label>
                        <div className="suggestedList">
                            {dialerList.map((item)=>{
                                return <DialerItem item={item} />
                            })}

                        </div>
                    </div>
                    <div className="dialerBottom">
                        <div className="dialerbottomIcon"><i className="fi fi-br-microphone"></i></div>
                        <div className="dialerbottomIcon"><i className="fi fi-br-play-alt"></i></div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default LeftFold;
