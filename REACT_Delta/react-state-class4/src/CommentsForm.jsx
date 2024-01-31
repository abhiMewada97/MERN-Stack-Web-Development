import { useState } from "react";

export default function CommentsForm() {

    let [formData, setFormData] = useState({userName:"", comments:"", rating:5});

    let handleInputChange = (event)=> {
        setFormData((currData) =>{
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event)=> {
        console.log(formData);
        event.preventDefault();
        setFormData({userName:"", comments:"", rating:5})
    }
    
    return (
        <>
            <h3>Give Comments!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">User Name</label>
                <input placeholder="User Name" type="text" value={formData.userName} id="userName" name="userName" onChange={handleInputChange} />
                <br/> <br/>

                <label htmlFor="comments">Comment</label>
                <textarea placeholder="Comment" value={formData.comments} id="comments" name="comments" onChange={handleInputChange} ></textarea>
                <br/> <br/>
                
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} id="rating" name="rating" onChange={handleInputChange} />
                <br/> <br/>
                
                <button>Add Comment</button>
            </form>
        </>
    );
}