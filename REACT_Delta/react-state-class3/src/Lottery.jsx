import {useState} from "react";
import "./Lottery.css";
import {genNumber, sum} from "./helper";

export default function Lottery() {

    // let [ticket, setTicket] = useState([0,0,0]);
    let [ticket, setTicket] = useState(genNumber(3));
    let isWinning = sum(ticket) === 15; 

    function genNewTicket(){
        setTicket(genNumber(3));
    };

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className='ticket'>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br/>
            <button onClick={genNewTicket}>Buy new Ticket</button>
            <br/>
            <div>{isWinning && <h3>Congratulations, you Won!</h3>}</div>
        </div>
    );
}