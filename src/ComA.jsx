import React, { createContext } from 'react';
import ComB from './ComB';

const context = createContext();


const ComA = () => {


    let name = "pramod";
    let Fname = "Kamini";
    let add = "indore"

    return (
        <>
            <context.Provider value={{Fname, add}} >
                <div>ComA</div>
                <ComB name={name} />
            </context.Provider>
        </>
    )
}

export default ComA;
export { context };