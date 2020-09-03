import React, { useContext } from "react";
import Product from "../Product/Product";
import { CartContext } from "../../../Providers/CartContext";

const ProductsList = () => {
    const [products, setProducts] = useContext(CartContext);

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
            <button className="btn btn-success submit__button">Post</button>
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
