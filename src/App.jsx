import React from "react";
import Movie from "./Components/Movie";
import Webseries from "./Components/Webseries";
import "./App.css";

const App = () => {
    return (
        <>
            <main>
                <div className="container">
                    <Movie />
                    <Webseries />
                </div>
            </main>
        </>
    )
}

export default App;