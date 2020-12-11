import React, {useState} from "react"

export default function Todo_app(){
    const [item, setItem] = useState("");

    function handleInput(event){
        setItem(event.target.value)
       return console.log(item)
    }
    return(
        <div className="container">
            <div className="input-container">
                <input onChange={handleInput} type="text" placeholder='Add Item' value={item}/>
                <button >ADD</button>
            </div>
            <div className="display">
                <p></p>
            </div>
        </div>
    )
}