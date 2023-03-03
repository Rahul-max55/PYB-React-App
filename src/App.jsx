import React, { useState , useCallback } from 'react';
import "./App.css";
import MemoFile from './MemoFile';
import Renderfile from './Renderfile';

const App = () => {

    //useCallback

    const [count, setCount] = useState(0)
    const [item, setItem] = useState([11, 12]);

    const handleClick = () => {
        setCount((count) => count + 1)
        // setCount(count + 1)
    }

    const addArr = useCallback(() => {
        return setItem((item => [...item, "Rahul"]))
    }, [item]);




    return (
        <>
            <div className="movieCard">
                <h1>{count}</h1>
                <button onClick={handleClick} >increment</button>
                <Renderfile item={item} addArr={addArr} />

                <MemoFile />
            </div>
        </>
    )
}

export default App