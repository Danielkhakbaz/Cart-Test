import React from "react";
import { Link } from "react-router-dom";

const NewProductButton = () => {
    const handleAPI = () => {
        alert("Posted!");
    };
    return (
        <>
            <button
                className="btn btn-success submit__button"
                onClick={handleAPI}
            >
                Submit
            </button>
            <Link to="/NewProduct">
                <button className="btn btn-primary newproduct__button">
                    New Product
                </button>
            </Link>
        </>
    );
};

export default NewProductButton;
