import React, {useState} from "react"
import './App.css';



export default function Todo_app(){
    const [todo, setTodo] = useState('');
    const [todoVal, setTodoVal] = useState('')
    const[todoList, setTodoList] = useState([]);

    function handleInput(event){
        event.preventDefault()
        const inputVal = event.target.value;

        setTodo(inputVal);
        setTodoVal(inputVal);
       
    }

    function addTodo(e){
        e.preventDefault();
        if(todoVal !=''){
           setTodoList((preVal)=>[...preVal, todoVal]);

        setTodoVal('');
        setTodo('');   
        }
                 
    }

function AllTodo(props){
    const newTodo = props.newTodoList

  return newTodo.map((item)=> {
      return <div className="todo-item">
                <p>{item} </p>
                <button className='edit-btn'>E</button>
                <button className = 'delete-btn'> D</button>
             </div>
  }
  ).reverse()
}

    return(
        <div className="container">
            <h1 className='logo'>Todo App</h1>
            <div className="input-container">
                <input onChange={handleInput} type="text" placeholder='Add Item' value={todo}/>
                <button onClick={addTodo}>ADD</button>
            </div>
            <div className="item-display">
                <AllTodo newTodoList={todoList} />
            </div>
        </div>
    )
}