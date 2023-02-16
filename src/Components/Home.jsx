import React, { useState } from 'react';
import HomeCss from "./Home.module.css";

const Home = () => {

  const [Color, setColor] = useState("red")

  const handleChange = () => {
    Color === "red" ? setColor("blue") : setColor("red");
  }


  return (
    <main>
        <button onClick={handleChange} >Click to change Color</button>
      <div className="container" style={{ backgroundColor: Color }} >
        <h1 className={HomeCss.demo} >Home</h1>
      </div>
    </main>
  )
}

export default Home