import React, { useState, useContext } from "react";
import Input from "../../Common/Input/Input";
import SubmitButton from "../../Common/SubmitButton/SubmitButton";
import { CartContext } from "../../../Providers/CartContext";

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
                <Input id="input" type="text" onChange={handleChange} />
            </div>
            <SubmitButton inputValue={value} onAdd={handleAddProduct} />
        </>
    );
};

export default NewProduct;
