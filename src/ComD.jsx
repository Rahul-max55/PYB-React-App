import React, { useContext } from 'react';
import { context } from './ComA';


const ComD = ({ name }) => {

    const {Fname , add} = useContext(context);
    // const Fname = useContext(context);

    return (
        <>
            <div>ComD</div>
            <h1>{name}</h1>
            <h1>{Fname}</h1>
            <h1>{add}</h1>
        </>
    )
}

export default ComD