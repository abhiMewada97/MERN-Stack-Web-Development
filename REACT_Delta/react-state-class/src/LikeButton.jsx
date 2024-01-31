import { useState } from "react";

export default function LikeButton() {
    
    let [isLike, setIsLike] = useState(false);           //this line is use for initialization, during re-render this line is ignore
    let [clicks, setClicks] = useState(0);               // during re-render our whole code of function is execute

    let toggleLike = ()=> {
        setIsLike(!isLike);
        setClicks(clicks+1);
        console.log(`in func Count = ${clicks}`);
    }
    console.log(`out func Count = ${clicks}`);

// /////////////////////////////////////////////////////////////////////
    // return(
    //     <div>
    //         <p onClick={toggleLike}>
    //             {isLike.toString()}
    //             <i className="fa-regular fa-heart"></i>
    //         </p>
    //     </div>
    // )

    let likeStyle = {color: "red"};

    return(
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {isLike ? <i className="fa-regular fa-heart"/> : <i className="fa-solid fa-heart" style={likeStyle}></i>}
                
            </p>
        </div>
    )
}