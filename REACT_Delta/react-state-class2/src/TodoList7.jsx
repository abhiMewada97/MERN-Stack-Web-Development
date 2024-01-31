import { useState } from "react";
import {v4 as uuid4} from 'uuid';

export default function TodoList() {

    let [todos, setTodos] = useState([{task: "sample", id:uuid4(), isDone:false}]);    //array of object
    let [newTodo, setNewTodo] = useState([""]);

    let addNewTask = ()=> {
        console.log("task added");
        setTodos((prevTodos) => {
            return [...todos, {task : newTodo, id : uuid4(), isDone: false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        
        setTodos((prevTodos)=> todos.filter((prevTodos) => prevTodos.id != id)); 
    }

    let markAllAsDone = ()=> {
       
        setTodos( (prevTodos)=> (
            prevTodos.map((todo) => {
                return {
                    // ...todo, isDone: !todo.isDone
                    ...todo, isDone: true
                };
            })
        ));
    };

    let markAsDone = (id)=> {
       
        setTodos( (prevTodos)=> (
            prevTodos.map((todo) => {
                if(id==todo.id){

                    return {
                        // ...todo, task: todo.isDone=true
                        ...todo, isDone: !todo.isDone

                    };
                }else
                {
                    return todo;
                }
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
                            
                            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}> {todo.task} </span> 
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}> Delete </button>
                            &nbsp; &nbsp; &nbsp;
                            <button onClick={()=>markAsDone(todo.id)} > {todo.isDone ? <p>Mark as not Done</p> : <p>Mark as Done</p>} </button>
                        </li>
                    ))
                }
            </ul>

            <button onClick={markAllAsDone}> {todos.isDone ? <p>Mark All as not Done</p> : <p>Mark All as Done</p>} </button>
        </div>
    );
};