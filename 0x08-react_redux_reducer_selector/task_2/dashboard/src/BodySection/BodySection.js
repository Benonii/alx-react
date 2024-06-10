import React from "react";
import propTypes from "prop-types";

export default function BodySection({ title, children }) {
    return (
        <div className="bodySection">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

BodySection.propTypes = {
    title: propTypes.string,
    children: propTypes.node.isRequired,
};