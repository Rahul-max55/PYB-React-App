import React from 'react';
import { useState } from 'react';

const IncreDecre = () => {

  const[data , setData] = useState(0);

  const incre = () => {
    setData(data + 1);
  }

  const decre = () => {
    setData(data - 1);
  }


  return (
    <>
      <div className="flex">
        <button onClick={decre} >-</button>
        <h1 className="data">{data}</h1>
        <button onClick={incre} >+</button>
      </div>
    </>
  )
}

export default IncreDecre