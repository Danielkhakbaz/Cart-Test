import React, { useContext } from "react";
import PostButton from "../../Common/PostButton/PostButton";
import Product from "../Product/Product";
import { CartContext } from "../../../Providers/CartContext";
import { apiURL } from "../../../Services/API/Config.json";
import { axios } from "axios";

const ProductsList = () => {
    const [products, setProducts] = useContext(CartContext);

    const handlePostButton = async () => {
        alert("There is no Post Request!");

        const newProduct = { id: products.length + 1 };
        const { data: product } = await axios.post(apiURL, newProduct);
        const allProducts = [products, ...product];
        setProducts({ allProducts });
    };
    const handleDecreamentButton = (product) => {
        const allProducts = [...products];
        const index = allProducts.indexOf(product);
        allProducts[index] = { ...product };
        allProducts[index].count = allProducts[index].count - 1;
        setProducts(allProducts);
        if (product.count === 1) {
            const allProducts = products.filter(
                (newProduct) => newProduct.id !== product.id
            );
            setProducts(allProducts);
        }
    };
    const handleIncreamentButton = (product) => {
        const allProducts = [...products];
        const index = allProducts.indexOf(product);
        allProducts[index] = { ...product };
        allProducts[index].count = allProducts[index].count + 1;
        setProducts(allProducts);
    };
    const handleDeleteButton = (product) => {
        const allProducts = products.filter(
            (newProduct) => newProduct.id !== product.id
        );
        setProducts(allProducts);
    };

    return (
        <>
            <PostButton onPost={handlePostButton} />
            <div className="products">
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        handleDecreament={handleDecreamentButton}
                        handleIncreament={handleIncreamentButton}
                        handleDelete={handleDeleteButton}
                    />
                ))}
            </div>
        </>
    );
};

export default ProductsList;
