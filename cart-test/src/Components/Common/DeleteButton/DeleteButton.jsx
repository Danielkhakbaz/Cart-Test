import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ product, onDelete }) => {
    return (
        <>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(product)}
            >
                <i className="fas fa-times" />
            </button>
        </>
    );
};

DeleteButton.propTypes = {
    product: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
