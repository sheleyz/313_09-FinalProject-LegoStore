import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
    let style = {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "dodgerblue"
    }

    let linkStyle = {
        margin: "10px",
        color: "white",
        textDecoration: "none"
    }

    return (
        <nav style={style}>
            <NavLink style={linkStyle} activeStyle={{textDecoration: "underline", fontWeight: "bold"}} exact to={"/"}>Store</NavLink>
            <NavLink style={linkStyle} activeStyle={{textDecoration: "underline", fontWeight: "bold"}} to={"/cart"}>Cart</NavLink>
            <NavLink style={linkStyle} activeStyle={{textDecoration: "underline", fontWeight: "bold"}} to={"/admin"}>Admin</NavLink>
        </nav>
    );
}

export default Nav;