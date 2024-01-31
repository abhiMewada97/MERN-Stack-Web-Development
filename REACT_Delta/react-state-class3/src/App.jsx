import './App.css'
import Lottery from './Lottery.jsx'
import Lottery1 from './Lottery1.jsx'
import { sum } from './helper.js';
import Form from '../../react-state-class4/src/Form.jsx';

function App() {

  let winCondition = (ticket)=> {
    // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0]===0;
  };
  
  return (
    <>
      {/* <Lottery/> */}

      {/* <Lottery1 n={3} winSum={15}/> */}
      <Lottery1 n={3} winCondition={winCondition}/>

    </>
  )
}

export default App
