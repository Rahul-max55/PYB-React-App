import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [inputData, setInputData] = useState("pramod");

    const handleChange = (e) => {
        let x = e.target.value
        setInputData(x);
    }

    console.log(inputData);

    return (
        <>
            <form>
                <input type="text" value={inputData} name="name" id="name" onChange={handleChange}/>
            </form>
        </>
    )
}

export default Form