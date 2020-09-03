import React from "react";
import PropTypes from "prop-types";

const MinusButton = ({ product, onDecreament }) => {
    return (
        <>
            <button
                className="btn btn-warning mx-2"
                disabled={product.count === 0 ? "disabled" : ""}
                onClick={() => onDecreament(product)}
            >
                <i className="fas fa-minus" />
            </button>
        </>
    );
};

MinusButton.propTypes = {
    product: PropTypes.object.isRequired,
    onDecreament: PropTypes.func.isRequired,
};

export default MinusButton;
