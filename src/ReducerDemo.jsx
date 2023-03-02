import React, { useReducer } from 'react';

const reducer = (state, action) => {
    let { increVal, decreValue } = state;
    switch (action.type) {
        case "INCREMENT":
            increVal = increVal + 1;
            return { ...state, increVal: increVal };
        case "DECREMENT":
            decreValue = decreValue + 1;
            return { ...state, decreValue: decreValue };
        default:
            return state;
    }
}

const ReducerDemo = () => {

    let initialValue = { increVal: 100, decreValue: -100 };

    const [state, dispatch] = useReducer(reducer, initialValue);
    let { increVal, decreValue } = state;

    const incre = () => {
        dispatch({ type: "INCREMENT" })
    }

    const decre = () => {
        dispatch({ type: "DECREMENT" })
    }

    return (

        <>
            <h1>{increVal}</h1>
            <button onClick={incre} >Increment</button>
            <h1>{decreValue}</h1>
            <button onClick={decre} >Decrement</button>

        </>


    )
}

export default ReducerDemo