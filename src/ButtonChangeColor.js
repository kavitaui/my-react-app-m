import {useState} from "react";
export default function ButtonChangeColor (){
    const [buttonColor,setButtonColor] =useState('orange');
    const HandleChangeColor =(color)=>{
        setButtonColor(color)
    }
    return(
       <> <button  style={{'background-color':buttonColor}}>change the button color </button>
        <div><ul><li><input type ="checkbox" onClick={()=>{HandleChangeColor('red')}} />Red</li>
        <li><input type ="checkbox" onClick={()=>{HandleChangeColor('green')}}/>green</li>
         <li><input type ="checkbox" onClick={()=>{HandleChangeColor('yellow')}} />yellow</li>
         <li><input type ="checkbox" onClick={()=>{HandleChangeColor('purple')}} />purple</li></ul>   
        </div></>
    )
}