import { useState } from "react"

export default function LudoBoard() {

    // using object
    let [moves, setMoves] = useState({blue:0, yellow:0, green:0, red:0});      // here object moves come 
    
    // using array
    let [arr, setArr] = useState(["no moves"]);

    // let  updateBlue = ()=> {
    //     moves.blue += 1;        // jabh ham object key ki balue ko change karte hai to reference ya phir address change nahi hota eshliye update nahi hoga, here only changing in object value not in object that's why
    //     console.log(`move.blue = ${moves.blue}`);
    //     setMoves(moves);     // that's why setMoves koi change deteckt nahi ker pa raha hai, so re-render is only done when change in state or change in state value
    // };

    let  updateBlue = ()=> {
        // moves.blue += 1;
        console.log(`moves.blue = ${moves.blue}`);
        // setMoves({...moves, blue:moves.blue+1});

        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1}
        });
    };

    let  updateYellow = ()=> {

        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        });
    };

    let  updateGreen = ()=> {

        console.log(arr);
        // arr.push("green moves");          // error
        
        // setArr([...arr,"green moves"]);

        setArr((preArr) =>{
            return [...preArr, "green moves"];
        });
    };

    let  updateRed = ()=> {

        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        });
    };

    return (
        <div>
            <p> Game Begins! </p>
            {arr}
            <div className="boards">
                
                <p >Blue Moves = {moves.blue}</p>
                <button  style={{backgroundColor:"blue", color:"white"}} onClick={updateBlue} >+1</button>

                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow"}} onClick={updateYellow} >+1</button>

                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor:"green", color:"white"}} onClick={updateGreen} >+1</button>

                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor:"red", color:"white"}}  onClick={updateRed} >+1</button>
                
            </div>
        </div>
    )
}