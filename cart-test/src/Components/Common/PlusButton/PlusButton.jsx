import React from "react";
import PropTypes from "prop-types";

const PlusButton = ({ product, onIncreament }) => {
    return (
        <>
            <button
                className="btn btn-primary mx-2"
                onClick={() => onIncreament(product)}
            >
                <i className="fas fa-plus" />
            </button>
        </>
    );
};

PlusButton.propTypes = {
    product: PropTypes.object.isRequired,
    onIncreament: PropTypes.func.isRequired,
};

export default PlusButton;
