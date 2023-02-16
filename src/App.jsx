import React from "react";
import "./App.css";
import Form from "./Components/Form";
import IncreDecre from "./Components/IncreDecre";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/IncreDecre" element={<IncreDecre />} />
                    <Route path="/Form" element={<Form />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;