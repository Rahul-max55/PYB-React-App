import React from "react";
import Pramod from "./Components/Heading";
import { name } from "./Components/Heading";
import "./App.css";

const App = () => {
    return (
        <>
            <Pramod />
            <h1>{name}</h1>
        </>
    )
}

export default App;