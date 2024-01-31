import { useState } from "react"

export default function Form() {

    let [fullName,setFullName] = useState("Abhishek Mewada");
    let [userName,setUserName] = useState("@abhishekMewada");

    function handleNameChange(event) {
        console.log(event.target.value);
        setFullName(event.target.value);
    };

    function handleUserName(event) {
        console.log(event.target.value);
        setUserName(event.target.value);
    };

    return (
        <form>
            <label htmlFor="fullName">Full Name </label>
            <input type="text" placeholder="enter full name" id="fullName" value={fullName} onChange={handleNameChange}></input>
            <br/><br/>
            <label htmlFor="userName">User Name </label>
            <input type="text" placeholder="enter user name" id="userName" value={userName} onChange={handleUserName}></input>
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}