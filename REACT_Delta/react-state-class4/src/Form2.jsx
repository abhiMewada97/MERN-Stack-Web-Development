import { useState } from "react"

export default function Form() {

    let [formData,setFormData] = useState({fullName:"", userName:"", password:""});


                                                    // yah per hum object ke sath deal ker rahe hai, 
    function handleInputChange(event) {
        let fieldName = event.target.name ;
        let newValue = event.target.value ;
        console.log(newValue);

        // setFormData(fieldName=newValue);

        // setFormData((currData) =>{
                                                                    // jabh bhi ham object ke sath deal ker rahe hote, 
                                                                    // to sirf key value ko change karna kaphi nahi hota, 
                                                                    // hame puranin object ko puri tarah re-construct karke new object send karni hoti hai, 
                                                                    // tabhi object ke ander change valid mana jata hai
        //     currData[fieldName] = newValue;          // hame fieldName ko dot . se access nahi karna, hame squre [] bracket lage ke access karna hai
        //                                              // [fieldName]       computed property name, in this case firstly value eveluate then it change
        //     return {...currData};        // returning new object
        // })

        setFormData((currData) =>{
            // return {...currData, [fieldName] : newValue };
            return {...currData, [event.target.name] : event.target.value };
        });
    };


    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({fullName:"", userName:"", password:""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input type="text" placeholder="enter full name" id="fullName" value={formData.fullName} name="fullName" onChange={handleInputChange}></input>
            <br/><br/>
            <label htmlFor="userName">User Name </label>
            <input type="text" placeholder="enter user name" id="userName" value={formData.userName} name="userName" onChange={handleInputChange}></input>
            <br/><br/>
            <label htmlFor="password">Password </label>
            <input type="password" placeholder="enter password" id="password" value={formData.password} name="password" onChange={handleInputChange}></input>
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}