import { useState } from "react";
import {v4 as uuid4} from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{task: "sample", id:uuid4()}]);    //array of object
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = ()=> {
        console.log("task added");
        setTodos((prevTodos) => {
            return [...todos, {task : newTodo, id : uuid4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id)); 
    }

    let upperCaseAll = ()=> {
        // let newArr = todos.map((todo) => {
        //     return {
        //         ...todo, task: todo.task.toUpperCase()
        //     };
        // });
        // console.log(newArr);

        setTodos( (prevTodos)=> (
            prevTodos.map((todo) => {
                return {
                    ...todo, task: todo.task.toUpperCase()
                };
            })
        ));
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
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span> {todo.task} </span> 
                            &nbsp; &nbsp; &nbsp;
                            {/* <button onClick={deleteTodo(todo.id)}> Delete </button> */}    {/* it will execute the function so we use arrow func */}
                            <button onClick={()=>deleteTodo(todo.id)}> Delete </button>        {/* arrow function -->  it will not execute function it will create a copy with some argument */}
                        </li>
                    ))
                }
            </ul>

            <button onClick={upperCaseAll}>Update All</button>
        </div>
    );
};