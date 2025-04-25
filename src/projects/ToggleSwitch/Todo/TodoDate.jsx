import { useEffect, useState } from "react";
export const TodoDate = ()=>{
    const[dateTime, setDateTime] = useState("");
    useEffect(()=>{
        const interval = setInterval(()=>{
            const options = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };
            const now= new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString("en-US", options);
            setDateTime(`${formattedDate} - ${formattedTime}`)
        },1000);
        return ()=> clearInterval(interval);
    },[])
    return ( <h2 className="date-time">{dateTime}</h2>);
}