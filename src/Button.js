

import { getQueriesForElement } from "@testing-library/react";
import { useState } from "react";
export default function Button() {
    const value = () => {
        debugger;
        let a = 10;
        let b = 20;
        let c = 30;
        let d = 40
        let e = a + b + c + d;
        console.log(e);
        return e;
    }
    const multiply = () => {
        debugger;
        let f = value() * 4;
        console.log(f);
        return f;

    }
    const add = () => {
        let adding = multiply();
        adding += 10;
        console.log(adding);

    }
    const [myModel, setMyModel] = useState(false);
    var close = () => {
        setMyModel(!myModel);
    }
    const [mycheckbox, setMyCheckBox] = useState('black');

    const HandleChangeColor = (color) => {
        setMyCheckBox(color);
    }



    return (
        <div>
            <button onClick={add}>knionoi</button>
            <div>
                <button className={`bordered accent ${myModel ? 'selected' : ''}`} style={{color:mycheckbox}}onClick={close}>Show This Page</button>
                {myModel && <div> this is the hidden page content.</div>}</div>
            Current Choosen color: {mycheckbox}
            <div>
                <ul>
                    <li><input type="checkbox" checked={setMyCheckBox} style={{ color: 'green' }} /></li>
                    <li><input type="checkbox" onClick={() => HandleChangeColor('red')} /> red</li>
                    <li> <input type="checkbox" onClick={() => HandleChangeColor('yellow')}/> yellow</li>
                    <li> <input type="checkbox" /> blue</li> </ul>
            </div>


        </div>
    )
}