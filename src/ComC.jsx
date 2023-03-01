import React from 'react'
import ComD from './ComD'

const ComC = (props) => {
    return (
        <>
            <div>ComC</div>
            <ComD name={props.name} />
        </>
    )
}

export default ComC;