import React, { useState } from "react";
import {MdModeNight, MdLightMode} from 'react-icons/md';

const Header = ({ handleToggleDarkMode }) => {

    const [isActive, setActive] = useState(false)
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          
        }
        className="save"
      >
        {/* <MdModeNight>Dark Mode</MdModeNight> */}
        {isActive?<MdModeNight onClick={()=>{
            setActive(!isActive)}}/> 'Dark Mode':
                <MdLightMode onClick={()=>{
            setActive(!isActive)}} />}
        
      </button>
    </div>
  );
};

export default Header;
