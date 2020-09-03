import React from "react";
import Title from "../../Common/Title/Title";
import MinusButton from "../../Common/MinusButton/MinusButton";
import Count from "../../Common/Count/Count";
import PlusButton from "../../Common/PlusButton/PlusButton";
import DeleteButton from "../../Common/DeleteButton/DeleteButton";
import PropTypes from "prop-types";

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

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleDecreament: PropTypes.func.isRequired,
    handleIncreament: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default Product;
