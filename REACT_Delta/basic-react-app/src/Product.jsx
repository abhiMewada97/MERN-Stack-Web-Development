import "./Product.css";

function Product({title, price, features, features2}) {
    let list = features.map((feature) => <li>{feature}</li>);
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>Price: {price}</p>
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <p>{list}</p>
            <p>{features}</p>                {/* array ke case me individual item pick hota hai per object case me individual item pick nahi hota hum key ke throgh item ko pick ker sakte hai */}
            <p>{features2.a}</p>             {/* we can not render directly this object we can render individual key */}

        </div>
    );
}

export default Product;