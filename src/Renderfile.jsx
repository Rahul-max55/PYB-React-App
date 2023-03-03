import React, { memo } from 'react';

const Renderfile = ({item ,  addArr }) => {

    console.log("Render...........");

    return (
        <>
            <div style={{ display: 'flex' }} >
                {item.map((value, i) => {
                    return <h1 key={i} style={{ margin: "10px" }} >{value}</h1>
                }
                )}
            </div>
            <button onClick={addArr} >Add new Array</button>
        </>
    )
}

export default memo(Renderfile);