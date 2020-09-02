import React, { useState, useEffect } from "react";
import { apiURL } from "../../../Services/API/Config.json";
import axios from "axios";

const Products = () => {
    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await axios.get(apiURL);
            setProducts(data.products);
        };
        fetchAPI();
    }, []);

    const [products, setProducts] = useState([]);
    return (
        <>
            {products.map((product) => (
                <>{product.name}</>
            ))}
        </>
    );
};

export default Products;
