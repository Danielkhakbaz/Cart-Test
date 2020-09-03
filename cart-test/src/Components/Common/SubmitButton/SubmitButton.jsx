import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ inputValue, onAdd }) => {
    return (
        <>
            <button
                className="btn btn-primary my-2"
                disabled={inputValue ? "" : "disabled"}
                onClick={onAdd}
            >
                Submit
            </button>
        </>
    );
};

SubmitButton.propTypes = {
    inputValue: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default SubmitButton;
