import React, { useState, useEffect } from "react";
import './App.css';
import ComA from "./ComA";


const App = () => {


    // const data = useRef(0);
    // data.current[0].focus = "red"

    // useEffect

    const [count, setCount] = useState(1);
    const [multi, setMulti] = useState(1);

 
    useEffect(() => {
      
        setMulti(count * 2);

    }, [count]);

    const handleClick = () => {
        setCount((v) => v + 1);
    }


    return <>
        <div className="container" >
            <ComA />
            <div className="movieCard">
                <h1>{`count :${count}`}</h1>
                <h1>{`multi :${multi}`}</h1>
                <button onClick={handleClick} >Increment</button>
                {/* <button onClick={StopTimmer} >Stop</button> */}
            </div>
        </div>
    </>
}

export default App;