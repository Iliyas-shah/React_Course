import { useRef,useState } from "react";

export default function Counter(){
    console.log("render console");
    const [number,setNumber]=useState(0);
    const num=useRef(0);
    function handleClick(e){
        e.stopPropagation();
        setNumber(number=>number+1);
        num.current++;
        console.log(num.current);
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={handleClick}>Increase</button>
        </>
        
    );
}