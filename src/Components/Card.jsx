import React from 'react';

const Card = (props) => {


  return (
      <div className="card">
          <img src={props.url} alt="" />
          <h3>{props.SMovie}</h3>
      </div>
  )
}

export default Card