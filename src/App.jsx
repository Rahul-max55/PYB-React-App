import React, { useState, useEffect } from "react";
import './App.css';


const App = () => {
    // useEffect

    const [count, setCount] = useState(0);
    const [multi, setMulti] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1);
    }

    // useEffect(() => {
    //     setMulti(count * 2);
    // }, [count])

    let timer;

    useEffect(() => {
       timer =  setTimeout(() => {
            setCount((c) => c + 1);
       }, 1000)
        
    })

    const StopTimmer = () => {
        clearTimeout(timer);
    }


    return <>
        <div className="container">
            <div className="movieCard">
                <h1>{`count :${count}`}</h1>
                <h1>{`multi :${multi}`}</h1>
                <button onClick={handleClick} >Increment</button>
                <button onClick={StopTimmer} >Stop</button>
            </div>
        </div>
    </>
}

export default App;