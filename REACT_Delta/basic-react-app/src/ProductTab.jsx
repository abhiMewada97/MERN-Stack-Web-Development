import Product from "./Product.jsx";

function ProductTab() {
    // let options = ["high-tech","durable", "fast"];
    // let options = [<li>"high-tech"</li>,<li>"durable"</li>, <li>"fast"</li>];
    let options = ["high-tech","durable", "fast"];        // map is use for this
    let options2 = {a:"high-tech",b:"durable", c:"fast"};
    return (
        <>
            <Product title="Phone" price={1000} features={options} features2={options2}/>
            {/* <Product title="Phone" price={1000} features={["high-tech","durable", "fast"]} features2={{a:"high-tech",b:"durable", c:"fast"}}/> */}

            {/* <Product title="Laptop" price={5000} />
            <Product title="earphone" /> */}

        </>
    );
}

export default ProductTab;