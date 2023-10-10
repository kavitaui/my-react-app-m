

import {useState} from "react";
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
    const add=()=>{
        let adding = multiply();
        adding +=10;
        console.log(adding);

    }
    const [myModel,setMyModel] = useState(false);
    var close =()=>{
        setMyModel(!myModel);
    }

    return (
        <div>
            <button onClick={add}>knionoi</button>
        <div >   


<button className ={`bordered accent ${myModel? 'selected':''}`}onClick={close}>Show This Page</button>
{myModel&&<div> this is the hidden page content.</div>}</div>  

<div><input type ="checkbox"> Green</input></div>


        </div>
    )
}