import React, { useState, useEffect } from "react"


function DigitalTime(){

    const [time,setTime] = useState(new Date());

    useEffect(()=>{
        const intervalAction = setInterval(()=>{
              setTime(new Date())
        },1000);

        return()=>{
            clearInterval(intervalAction)
        }
    },[]);

    function formatTime(){
        let hrs = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        const meridian = hrs > 12? "PM" : "AM"
        hrs = hrs % 12 || 12

        return `${padZero(hrs)} : ${padZero(mins)} : ${padZero(secs)}: ${meridian}`
    }


    function padZero(number){
return(number < 10? "0" : "") + number
    }

    return(
        <div clock-container>
            <div className="digital-clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        
      

    )
}

export default DigitalTime;