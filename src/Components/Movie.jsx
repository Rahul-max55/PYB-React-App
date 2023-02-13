import React from "react";
import Card from "./Card";
import doom from "./img/DOOM1.jpg"
import Dangal_Poster from "./img/Dangal_Poster.jpg"
import Fan from "./img/Fan.jpg"
import sultan from "./img/sultan.jpg"

const Movie = () => {

    let urlDangle = "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg";

    // let movieData = ["Doom", "Sultan", "Dangle", "Fan"];

    let movieData = [
        { name: "Doom", img: doom , id:4578 },
        { name: "Sultan", img: sultan, id: 4575 },
        { name: "Fan", img: Fan, id: 478 },
        { name: "Dangal", img: Dangal_Poster, id: 48 },
    ]


    // let arr = [12, 13, 14];
    // let [fVal, sVal, tVal] = arr;
    // console.log(sVal);

    // let obj = { name: "Rahul", age: 24 };
    // let {age , name } = obj;
    // console.log(name);


    return (
        <>
            <div className="movieCard">
                <h1>TOP THREE MOVIES</h1>
                <div className="all_card">
                    {movieData.map((v, index) => {
                        const { name, img } = v;
                        return <Card key={index} SMovie={name} img={img} />
                    })
                    }
                </div>
            </div>
        </>
    )
}


export default Movie;