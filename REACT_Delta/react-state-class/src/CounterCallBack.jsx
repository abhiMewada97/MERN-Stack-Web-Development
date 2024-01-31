import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function CounterCallBack() {

    // let [count, setCount] = useState(init());    // in this case init func always call when re-render

    let [count, setCount] = useState(init);  // we should pass as a reference now useState execute it, should not execute  --> () 
    
    // let incCount = ()=> {
    //     setCount(count+1);
    //     setCount(count+1);
    //     setCount(count+1);
    // };

// /////    above work async & below work synchronasly            //////////////////////////

    let incCount = ()=> {
        setCount((currCount) => {
            return currCount+1;
        });
        setCount((currCount) => {
            return currCount+1;
        });

        // setCount(25)        // now not re-render because it's state not changing
     };

    return (
        <div>
            <p>Counter = {count} </p>
            <button onClick={incCount}>Increase count</button>
        </div>
    );
}