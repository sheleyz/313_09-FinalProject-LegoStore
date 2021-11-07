import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {remove_from_cart} from "../redux/reducers/setActions";

function Cart() {
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
        margin: "10px",
        textAlign: "center"
    }

    const dispatch = useDispatch();
    const removeFromCart = (product) => {
        dispatch(remove_from_cart(product));
    }

    const cartProductEles = useSelector(state => state.cart).map((product, index) =>
        <div key={index} style={productStyle}>
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
                    removeFromCart(product);
                }} style={{margin: "10px"}}>Remove from Cart
                </button>
            </div>
        </div>
    );

    return (
        <div className="App">
            <h1>Cart</h1>
            <div style={wrapperStyle}>{cartProductEles}</div>
        </div>
    );
}

export default Cart;