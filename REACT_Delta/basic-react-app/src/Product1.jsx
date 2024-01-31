import "./Product1.css";

function Product({title, price=1, features}) {

    // if(price > 30000) {

    //     return (
    //         <div className="Product">
    //         <h4>{title}</h4>
    //         <p>Price: {price}</p>
    //         <p>Discount of 5%</p>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <div className="Product">
    //         <h4>{title}</h4>
    //         <p>Price: {price}</p>
    //         </div>
    //     );
    // }


// //////////////////////////////////////////////////////////////////////
    // let isDescount = price > 30000 ? "Discount 5%": "";

    // return (
    //     <div className="Product">
    //         <h4>{title}</h4>
    //         <p>Price: {price}</p>
    //         <p>{isDescount}</p>
    //     </div>
    // );

// //////////////////////////////////////////////////////////////////////

    // return (
    //     <div className="Product">
    //         <h4>{title}</h4>
    //         <p>Price: {price}</p>
    //         {/* <p>{price > 30000 ? "Discount: 5%": ""}</p>*/}    {/* // in this case extra paragraph is add even though no discount */}
    //         {/* {price > 30000 ? <p> Discount: 5%</p>: null}         in this case paragraph is add only when discount */}
    //         {price > 30000 && <p> Discount: 5%</p> }
    //     </div>
    // );

    // ///////////////               dynamic component style      ////////////////////////

    let isDiscount = price>30000;
    let styles_abc = {backgroundColor: isDiscount ? "pink" : ""};
    return (
        <div className="Product" style={styles_abc}>
            <h4>{title}</h4>
            <p>Price: {price}</p>
            {isDiscount && <p> Discount: 5%</p> }
        </div>
    );
}

export default Product;