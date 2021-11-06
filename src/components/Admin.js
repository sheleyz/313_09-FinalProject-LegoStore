import React from "react";
import {useDispatch} from "react-redux";
import {add_product} from "../redux/reducers/setActions";

function Admin() {
    const [obj, setObj] = React.useState({
        name: "",
        stock: 0,
        price: 0,
        image: "https://images.unsplash.com/photo-1560529178-855fa2041193?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2080&q=80"
    });

    const dispatch = useDispatch();
    const addProduct = () => {
        if (obj.name !== "" && obj.stock !== 0 && obj.price !== 0) {
            dispatch(add_product(obj));
        }
    }

    const handleChange = (event) => {
        const newInput = {
            ...obj,
            [event.target.name]: event.target.value
        }
        setObj(newInput);
    }

    return (
        <div>
            <h1>Admin</h1>
            <div>
                <input type="text" placeholder={"Product Name"} name={"name"} onChange={handleChange}/>
                <input type="number" placeholder={"Stock"} name={"stock"} onChange={handleChange}/>
                <input type="number" placeholder={"Price"} name={"price"} onChange={handleChange}/>
                <button onClick={addProduct}>Add Product</button>
            </div>
        </div>
    );
}

export default Admin;