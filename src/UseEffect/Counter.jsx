import React from 'react';
import { VscArrowCircleUp } from "react-icons/vsc";
import { VscArrowCircleDown } from "react-icons/vsc";
import { useEffect, useState } from 'react';


const Counter = () =>{
    const [count, setCount] = useState(0);
    const [messege, setMassege] = useState("");

    const increment = () => {
    setCount(count + 1); 
  };
  const decrement = () =>{
    setCount(count - 1)
  };
  useEffect(() =>{
            console.log(`you clicked : ${count} on increase and runs the useEffect`);
            setMassege(`You Clicked ${count} on the increase button.`);
  },[count])

    return (
        <>
        <h1>Counter : {count}</h1>
        <button className='px-6 py-6 bg-blue-400 ' onClick={increment}><VscArrowCircleUp /></button>
        <button className='px-6 py-6  bg-[green]'  onClick={decrement}><VscArrowCircleDown /></button>
        <p>{messege}</p>
        </>
    )
}

export default Counter;