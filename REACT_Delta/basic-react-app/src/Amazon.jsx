import "./Amazon.css";
import Price from "./Price.jsx";

function Amazon({title, idx}) {
    let oldPrice = ["132","432","497","999"];
    let newPrice = ["100","400","499","989"];
    let Description = [["8,000 DPI","5 programmable button"],
        ["intuitive surface", "designed for iPad Pro"],
        ["designed for iPad Pro","intuitive surface"],
        ["wireless","portable"]];

    return (
        <div className="Amazon" >
            <h3>{title}</h3>
            <p> {Description[idx][0]}</p>
            <p> {Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}

export default Amazon;