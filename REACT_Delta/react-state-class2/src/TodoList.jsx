import { useState } from "react";

export default function TodoList() {

    let [todos, setTodos] = useState(["sample"]);
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = ()=> {
        console.log("task added");
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        // console.log(event.target);
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    return (
        <div>
            
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
            <br/> <br/>
            <button onClick={addNewTask}> Add Task </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr/>
            <h3>Tasks Todo</h3>
            <ul>
                {
                    // todos.map((todo) => {
                    //     return <li>{todo}</li>;
                    // })

                    todos.map((todo) => (
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
};