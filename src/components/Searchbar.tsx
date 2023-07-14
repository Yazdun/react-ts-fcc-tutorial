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
    const newArray:any= []
    newArray.push(todo)
    let filterData = newArray?.filter((e: { text: { toLowerCase: () => { (): any; new(): any; includes: { (): any; new(): any; }; }; }; })=>{
        if(text == ''){
            return 'Please specify task'

        }
        else{
            return e.text.toLowerCase().includes()
        }
    })
    return(
       <div className="Search">
        <Input
       type="text"
       placeholder="search task here"
       value={text}
       onChange={handler}
        />
        <li>{text}</li>
      
        {todo.text==text?
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
          <button onClick={filterData}>

</button>
      </motion.div>
        :'task not found'}
       </div>
    )
}