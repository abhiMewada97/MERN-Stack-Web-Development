import { useState } from "react";

export default function Counter() {

    // let arr = useState(2);
    // console.log(arr);

    
    // let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0);
    
    let incCount = ()=> {
        setCount(count+1);
        console.log(count);
    };

    return (
        <div>
            <p>Counter = {count} </p>
            <button onClick={incCount}>Increase count</button>
        </div>
    )
}