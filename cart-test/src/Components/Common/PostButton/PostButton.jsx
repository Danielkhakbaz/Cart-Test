import React from "react";
import PropTypes from "prop-types";

const PostButton = ({ onPost }) => {
    return (
        <>
            <button className="btn btn-success submit__button" onClick={onPost}>
                Post
            </button>
        </>
    );
};

PostButton.propTypes = {
    onPost: PropTypes.func.isRequired,
};

export default PostButton;
