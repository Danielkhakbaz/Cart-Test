import React from "react";
import PropTypes from "prop-types";

const Title = ({ name }) => {
    return (
        <>
            <h5 className="product__title">{name}</h5>
        </>
    );
};

Title.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Title;
