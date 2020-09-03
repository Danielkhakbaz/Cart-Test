import React, { useContext } from "react";
import NewProductButton from "../NewProductButton/NewProductButton";
import { CartContext } from "./../../../Providers/CartContext";

const Products = () => {
    const [products, setProducts] = useContext(CartContext);

    const handleDecreament = (product) => {
        if (product.count !== 0) {
            const allProducts = [...products];
            const index = allProducts.indexOf(product);
            allProducts[index] = { ...product };
            allProducts[index].count = allProducts[index].count - 1;
            setProducts(allProducts);
        }
        if (product.count === 1) {
            const allProducts = products.filter(
                (newProduct) => newProduct.id !== product.id
            );
            setProducts(allProducts);
        }
    };
    const handleIncreament = (product) => {
        const allProducts = [...products];
        const index = allProducts.indexOf(product);
        allProducts[index] = { ...product };
        allProducts[index].count = allProducts[index].count + 1;
        setProducts(allProducts);
    };

    return (
        <>
            <NewProductButton />
            <div className="products">
                {products.map((product) => (
                    <div className="products__list" key={product.id}>
                        <h5 className="products__title">{product.name}</h5>
                        <div className="products__buttons">
                            <button
                                className="btn btn-danger mx-2"
                                disabled={product.count === 0 ? "disabled" : ""}
                                onClick={() => handleDecreament(product)}
                            >
                                <i className="fas fa-minus" />
                            </button>
                            <p className="badge badge-info products__length">
                                {product.count}
                            </p>
                            <button
                                className="btn btn-primary mx-2"
                                onClick={() => handleIncreament(product)}
                            >
                                <i className="fas fa-plus" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
