import { useState,useContext } from "react";
import { Input } from "./Input";
import { Todo, TodoContext } from "../context/TodoContext";
import { motion } from 'framer-motion';
export function Searchbar(props:{todo : Todo}){
    const {todo} = props
    const [text , setText] = useState<string>("");
    //create a function to convert all the characters to lowercase, incase user enters different cases
    let handler = (e: { target: { value: string; }; })=>{
        setText(e.target.value.toLowerCase())
    }
    // let filterData = props?.filter((e)=>{
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
        {props.todo.text==text?
        <motion.div layout className="flex gap-2">
        {/* <Input
          type="text"
          value={editingTodoText}
          onChange={e => setEditingTodoText(e.target.value)}
        /> */}
        {/* <button
          className="px-5 py-2 text-sm font-normal text-orange-300 bg-orange-900 border-2 border-orange-900 active:scale-95 rounded-xl"
          onClick={() => handler()}
        >
          Update
        </button> */}
        {props.todo.text}
      </motion.div>
        :'task not found'}
       </div>
    )
}