import React from "react";
import {useSelector} from "react-redux";

function Store() {
    let wrapperStyle = {
        width: "1000px",
        padding: "10px",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "lightgrey"
    }

    let productStyle = {
        minHeight: "100px",
        width: "200px",
        margin: "10px"
    }

    const productEles = useSelector(state => state.products).map((product, index) =>
        <div key={index} style={productStyle}>
            <div>
                <img src={product.image} alt={product.name} width="200px" height="200px" style={{objectFit: "cover"}}/>
            </div>
            <div style={{marginTop: "-4px", padding: "5px", backgroundColor: product.stock <= 10 ? "skyblue" : "orange"}}>
                <h3>{product.name}</h3>
                <h3>{product.stock} in stock</h3>
                <h3>${product.price}</h3>
            </div>
        </div>
    );

    return (
        <div className="App" style={wrapperStyle}>
            {productEles}
        </div>
    );
}

export default Store;