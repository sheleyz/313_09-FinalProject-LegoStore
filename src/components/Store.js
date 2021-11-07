import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {add_to_cart} from "../redux/reducers/setActions";

function Store() {
    let wrapperStyle = {
        minHeight: "414px",
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

    const dispatch = useDispatch();
    const addToCart = (product) => {
        dispatch(add_to_cart(product));
    }

    const productEles = useSelector(state => state.products).map((product, index) =>
        <NavLink to={{pathname: `/product/${product.name}`, productProp: product}} key={index} style={{textDecoration: "none", color: "black"}}>
            <div style={productStyle}>
                <div>
                    <img src={product.image} alt={product.name} width="200px" height="200px" style={{objectFit: "cover"}}/>
                </div>
                <div style={{
                    marginTop: "-4px",
                    padding: "5px",
                    backgroundColor: product.stock <= 10 ? "skyblue" : "orange"
                }}>
                    <h3>{product.name}</h3>
                    <h3>{product.stock} in stock</h3>
                    <h3>${product.price}</h3>
                    <button onClick={function () {
                        addToCart(product);
                    }} style={{margin: "10px"}}>Add to Cart
                    </button>
                </div>
            </div>
        </NavLink>
    );

    return (
        <div className="App">
            <h1>Store</h1>
            <div style={wrapperStyle}>{productEles}</div>
        </div>
    );
}

export default Store;