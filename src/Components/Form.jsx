import React from 'react';
import { useState } from 'react';

const Form = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        number: "",
        textarea: "",
        sel:"Kia",
    });


    const handleChange = (e) => {
        let val = e.target.value;
        let name = e.target.name;
        setInput({ ...input, [name]: val })
    }


    // let obj = { name: "Rahul" };
    // let obj2 = { ...obj, name: "pramod" };


    return (
        <>
            <form>
                <input type="text" value={input.name} name="name" id="name" onChange={handleChange} />
                <input type="email" value={input.email} name="email" id="email" onChange={handleChange} />
                <input type="text" value={input.number} name="number" id="number" onChange={handleChange} />

                {/* textarea */}
                <textarea name="textarea" id="textarea" cols="30" defaultValue={input.textarea} rows="10" onChange={handleChange} />

                {/* selected */}
                <select name="sel" id="sel" defaultV alue={input.val} onChange={handleChange} >
                    <option value="Honda">Honda</option>
                    <option value="BMW" selected >BMW</option>
                    <option value="Kia">Kia</option>
                </select>

            </form>
        </>
    )
}

export default Form;