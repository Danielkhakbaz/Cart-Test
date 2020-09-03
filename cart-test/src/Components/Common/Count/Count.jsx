import React from "react";
import PropTypes from "prop-types";

const Count = ({ count }) => {
    return (
        <>
            <p className="badge badge-info">{count}</p>
        </>
    );
};

Count.propTypes = {
    count: PropTypes.number.isRequired,
};

export default Count;
