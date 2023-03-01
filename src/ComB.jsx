import React from 'react'
import ComC from './ComC'

const ComB = (props) => {
    return (
      <>
      <div>ComB</div>
      <ComC name={props.name} />
      </>
  )
}

export default ComB