import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { useState } from "react";
export const ToggleSwitch =()=>{
    const[isOn, setOn] = useState(false);
    const handleToggleSwitch =()=>{
        setOn(!isOn);
    }
    const checkIsOn = isOn ? "on": "off";
    const toggleBgColor= {backgroundColor: isOn ? "#4caf50": ""}
    return( 
    <>
    <h1>Toggle Switch <IoIosSwitch /></h1>
    <div className = "toggle-switch" style={toggleBgColor} onClick={handleToggleSwitch}> 
    <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{checkIsOn}</span>
    </div>
    </div>
    </>
    )
}