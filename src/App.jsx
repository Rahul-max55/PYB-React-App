import React from "react";
import "./App.css";
import Form from "./Components/Form";
import IncreDecre from "./Components/IncreDecre";


const App = () => {
    return (
        <>
            <main>
                <div className="container">
                    <IncreDecre />
                    <Form />
                </div>

            </main>
        </>
    )
}

export default App;