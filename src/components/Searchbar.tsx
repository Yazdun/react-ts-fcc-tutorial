import { useState,useContext } from "react";
import { Input } from "./Input";
import { TodoContext } from "../context/TodoContext";

export function Searchbar(){
    const [text , setText] = useState<string>("");
    //create a function to convert all the characters to lowercase, incase user enters different cases
    const data = useContext(TodoContext)
    let handler = (e: { target: { value: string; }; })=>{
        setText(e.target.value.toLowerCase())
    }
    // let filterData = data?.filter((e)=>{
    //     if(){

    //     }
    //     else{
    //         return e.text.toLowerCase().includes(data?.)
    //     }
    // })
    return(
       <div className="Search">
        <Input
       type="text"
       placeholder="search task here"
       value={text}
       onChange={handler}
        />
        <li>{text}</li>
       </div>
    )
}