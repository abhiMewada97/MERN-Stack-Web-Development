function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submitted ");
}

function Form() {
    // return(
    //     <form>
    //         <input placeholder="Write somethings "/>
    //         <button onClick={handleFormSubmit}> Submit </button> 
    //     </form>
    // );

    // both above and below same because they treared like same

    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write somethings "/>
            <button > Submit </button> 
        </form>
    );
}

export default Form;