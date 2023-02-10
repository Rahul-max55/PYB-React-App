import React from "react";
import head from "./image.jpg";
import Para from "./Para";

const Heading = () => {

    let fname = "Rahul";
    let lname = "Birla";
    let ImageUrl = "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

    let n = 5;
    // let str = "";
    // if (n === 3) {
    //     str += "number is 3"
    // } else {
    //     str += "number is not 3"
    // }
    let str = " ";
    const handleClick = (name) => {
        str += name;
        console.log(str);
    }

    return (
        <>
            <h1>{`Hello  World ${fname}  ${lname}`}</h1>
            <button>click  {lname}</button>
            <h1>{n === 3 ? "number is 3" : "Number is not 3"}</h1>
            {/* <img src={head} alt="" className="img" /> */}
            <Para />
            <button onClick={() => handleClick("Rahul")} >Click here</button>
            <div>{str}</div>
        </>
    )
}


let name = "rahul";

export default Heading;
export { name };