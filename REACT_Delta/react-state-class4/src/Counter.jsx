import { useEffect, useState } from "react"

export default function Counter() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let incCountx = ()=> {
        setCountx((currCount) => {
            return currCount+1;
        });
    };

    let incCounty = ()=> {
        setCounty((currCount) => {
            return currCount+1;
        });
    };

    // useEffect(function printSomething(){             // execute for all when change in state
    //     console.log("this is side effect");
    // });

    // useEffect(function printSomething(){                // execute for x only due to dependency
    //     console.log("this is side effect");
    // },
    //     [countx]
    // );

    // useEffect(function printSomething(){                // execute for x & y only due to dependency
    //     console.log("this is side effect");
    // },
    //     [countx, county]
    // );

    useEffect(function printSomething(){                // execute only when render not for re-render
        console.log("this is side effect");
    },
        []
    );

    return (
        <>
            <p>Countx = {countx}</p>
            <button onClick={incCountx}>+1</button>
            <br/> <br/>
            <p>County = {county}</p>
            <button onClick={incCounty}>+1</button>
        </>
    )
}