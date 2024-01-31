function handleMouseClick(event){
    console.log("hello ");
    console.log(event);
}

function handleMouseOver(){
    console.log("on Mouse Over");
}

function Button() {
    return (
        <>
         <button onClick={handleMouseClick}> Click me </button>
         <p onMouseOver={handleMouseOver}> Click me </p>
        </>
    );
}

export default Button;