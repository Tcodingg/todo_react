import React, {useState} from "react"

export default function Todo_app(){
    const [item, setItem] = useState('');
    const [itemVal, setItemVal] = useState('')

    function handleInput(event){
        const inputVal = event.target.value;
        setItem(inputVal);
        setItemVal(inputVal);
       
    }

    function addItem(){
        console.log(itemVal)
        
    }
   

    return(
        <div className="container">
            <h1 className='logo'>Todo App</h1>
            <div className="input-container">
                <input onChange={handleInput} type="text" placeholder='Add Item' value={item}/>
                <button onClick={addItem}>ADD</button>
            </div>
            <div className="item-display">
                <p>item </p>
                <p>item </p>
                <p>item </p>
                <p>item </p>
                <p>item </p>
            </div>
        </div>
    )
}