import React from 'react';

const Card = (props) => {


  
  return (
    <div className="card">
      <img src={props.img} alt={props.SMovie} />
      <h3>{props.SMovie}</h3>
    </div>
  )
}

export default Card;