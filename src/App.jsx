import React, { useRef } from "react";
import './App.css';
import ReducerDemo from "./ReducerDemo";


const App = () => {


    const referance = useRef();
    const count = useRef(0);

    const hideData = () => {
        referance.current.style.display = "none"
    }


    const handleClick = () => {
        count.current = count.current + 1
        console.log(count.current);
    }

    return <>
        <div className="movieCard">
            <ReducerDemo />
        </div>
        <div className="container" ref={referance} >
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit veritatis animi!</h1>
        </div>
        <button onClick={handleClick} >  click</button>
        <button onClick={hideData} >hide</button>
    </>
}

export default App;