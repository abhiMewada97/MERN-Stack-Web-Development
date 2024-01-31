import Amazon from "./Amazon.jsx";

function AmazonTab() {
    
    let styles = {
        display:"flex", 
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            <Amazon title="Logitech MX Master" idx={0}/>
            <Amazon title="Apple pencil (2nd Gen)" idx={1}/>
            <Amazon title="Zebronics Zeb-transformer"  idx={2}/>
            <Amazon title="Petronics Toad 23" idx={3}/>

        </div>
    );
}

export default AmazonTab;