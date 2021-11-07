import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
    let style = {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "darkgrey"
    }

    return (
        <nav style={style}>
            <NavLink style={{margin: "10px"}} exact to={"/"}>Store</NavLink>
            <NavLink style={{margin: "10px"}} to={"/cart"}>Cart</NavLink>
            <NavLink style={{margin: "10px"}} to={"/admin"}>Admin</NavLink>
        </nav>
    );
}

export default Nav;