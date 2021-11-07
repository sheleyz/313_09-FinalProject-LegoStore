import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import PopUp from "./components/PopUp";

function App() {
    let style = {
        display: "flex",
        justifyContent: "center"
    }

    return (
        <Router>
            <Nav/>
            <div className="App" style={style}>
                <Switch>
                    <Route exact path={"/"} component={Store}/>
                    <Route path={"/product/:name"} component={PopUp}/>
                    <Route path={"/cart"} component={Cart}/>
                    <Route path={"/admin"} component={Admin}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
