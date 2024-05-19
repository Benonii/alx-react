import React from "react";
import BodySection from "./BodySection";
import propTypes from "prop-types"
import './BodySectionWtihMarginBottom.css';

export default function BodySectioWithnMarginBottom(props) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection {...props} />
        </div>
    )
}

BodySectioWithnMarginBottom.propTypes = {
    title: propTypes.string,
    children: propTypes.node,
}