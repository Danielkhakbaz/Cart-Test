import React from "react";
import Title from "../../Common/Title/Title";
import MinusButton from "../../Common/MinusButton/MinusButton";
import Count from "../../Common/Count/Count";
import PlusButton from "../../Common/PlusButton/PlusButton";
import DeleteButton from "../../Common/DeleteButton/DeleteButton";

const Product = ({
    product,
    handleDecreament,
    handleIncreament,
    handleDelete,
}) => {
    return (
        <>
            <div className="products__list" key={product.id}>
                <Title name={product.name} />
                <div className="products__buttons">
                    <MinusButton
                        product={product}
                        onDecreament={handleDecreament}
                    />
                    <Count count={product.count} />
                    <PlusButton
                        product={product}
                        onIncreament={handleIncreament}
                    />
                </div>
                <DeleteButton product={product} onDelete={handleDelete} />
            </div>
        </>
    );
};

export default Product;
