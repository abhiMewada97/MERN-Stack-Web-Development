import {useState} from "react";
import {genNumber, sum} from "./helper";
import Ticket from './Ticket.jsx'
import Button from "./Button.jsx";

// export default function Lottery({n=3,winningSum=15}) {
export default function Lottery({n=3,winCondition}) {

    let [ticket, setTicket] = useState(genNumber(n));
    // let isWinning = sum(ticket) === winningSum; 
    let isWinning = winCondition(ticket); 

    function buyTicket(){
        setTicket(genNumber(n));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br/>
            {/* <button onClick={buyTicket}>Buy new Ticket</button> */}
            <Button action={buyTicket}/>
            <br/>
            <div>{isWinning && "Congratulations, you Won!"}</div>
        </div>
    );
}