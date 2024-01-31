import Product from "./Product1.jsx";

function ProductTab() {
    let options = ["high-tech","durable", "fast"];

    return (
        <>
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={40000} />
            <Product title="pen" />

        </>
    );
}

export default ProductTab;