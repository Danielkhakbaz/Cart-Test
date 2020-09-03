import React from "react";
import PropTypes from "prop-types";

const Input = ({ input, type, onChange }) => {
    return (
        <>
            <input
                id={input}
                className="form-control"
                type={type}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </>
    );
};

Input.propTypes = {
    input: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
