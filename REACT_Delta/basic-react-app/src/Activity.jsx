function Activity({userName,textColor}) {

    return (
        <div >
            <h3 style={{color : textColor}}  > Hello, {userName}</h3>
            {/* <h3 style={{color:textColor}}  > Hello, </h3> */}
            {/* <h3 > Hello, {userName}</h3> */}
            {/* <h3> Hell</h3> */}
        </div>
    );
}

export default Activity;