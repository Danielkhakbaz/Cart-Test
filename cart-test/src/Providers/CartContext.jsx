import React, { useState, useEffect } from "react";
import { apiURL } from "../Services/API/Config.json";
import axios from "axios";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const { data } = await axios.get(apiURL);
            setCart(data.products);
        };
        fetchAPI();
    }, []);

    return (
        <>
            <CartContext.Provider value={[cart, setCart]}>
                {children}
            </CartContext.Provider>
        </>
    );
};
