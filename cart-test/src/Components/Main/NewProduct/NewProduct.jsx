import React from "react";

const NewProduct = () => {
    return (
        <>
            <h1>Add New Product</h1>
            <div className="form-group">
                <label htmlFor="input">Title</label>
                <input id="input" type="text" className="form-control" />
            </div>
        </>
    );
};

export default NewProduct;
