import { useState } from "react";
import {v4 as uuid4} from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{task: "sample", id:uuid4()}]);    //array of object
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = ()=> {
        console.log("task added");
        // setTodos([...todos, newTodo]);
        // setTodos([...todos, {task : newTodo, id : uuid4()}]);

        setTodos((prevTodos) => {
            return [...todos, {task : newTodo, id : uuid4()}]
        });
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
                        <li key={todo.id}>{todo.task} </li>
                    ))
                }
            </ul>
        </div>
    );
};