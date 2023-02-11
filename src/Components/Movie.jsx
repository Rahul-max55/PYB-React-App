import React from "react";
import Card from "./Card";
import doom from "./DOOM1.jpg"

const Movie = () => {

    let urlDangle = "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg";


    return (
        <>
            <div className="movieCard">
                <h1>TOP THREE MOVIES</h1>
                <div className="all_card">
                    <Card SMovie="DOOM"  />
                    <Card SMovie="Sultan" />
                    <Card SMovie="Dangle" url={urlDangle} />
                </div>
            </div>
        </>
    )
}


export default Movie;