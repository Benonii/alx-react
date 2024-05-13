import React from "react";
import PropTypes from "prop-types";


export default function NotificationItem({ type="default", html, value }) {
    return (
        <li data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}>
            {value}</li>
    );
}

NotificationItem.PropTypes = {
    html: PropTypes.shape({__html: PropTypes.string.isRequired}),
    type: PropTypes.string,
    value: PropTypes.string,
}
