import React from 'react';
import { useEffect, useState } from 'react';

const Interval_Example = () =>{
    const[time, setTime] = useState(0);

    useEffect( () =>{
        const Interval = setInterval(()=>{
            setTime((c)=> c + 1);
        }, 1000)

    },[])


    return(
        <h1>Time : {time}</h1>
    )
}
export default Interval_Example;