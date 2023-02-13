import React from "react";
import Movie from "./Components/Movie";
import Webseries from "./Components/Webseries";
import "./App.css";
import Events from "./Components/Events";

const App = () => {
    return (
        <>
            <main>
                <div className="container">
                    <Movie />
                    <Webseries />
                    <Events />
                </div>

            </main>
        </>
    )
}

export default App;