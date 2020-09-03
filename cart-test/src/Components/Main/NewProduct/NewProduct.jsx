import React, { useState, useContext } from "react";
import { CartContext } from "./../../../Providers/CartContext";

const NewProduct = (props) => {
    const [value, setValue] = useState("");

    const [products, setProducts] = useContext(CartContext);

    const handleAddProduct = () => {
        const allProducts = [...products];
        const newProduct = {
            id: (allProducts.length + 1).toString(),
            name: value,
            count: 0,
        };
        allProducts.push(newProduct);
        setProducts(allProducts);
        props.history.push("/Cart");
    };
    const handleChange = (value) => {
        setValue(value);
    };

    return (
        <>
            <h1>Add New Product</h1>
            <div className="form-group">
                <label htmlFor="input">Title</label>
                <input
                    id="input"
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e.currentTarget.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={handleAddProduct}>
                Submit
            </button>
        </>
    );
};

export default NewProduct;
