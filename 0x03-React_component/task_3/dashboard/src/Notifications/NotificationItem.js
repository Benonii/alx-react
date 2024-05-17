import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem({ key, type, html, value, markAsRead }) {
    let list_item;
    html ? list_item = (
        <li data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}
            onClick={markAsRead}>
            </li>
    ) : list_item = (
        <li data-notification-type={type} onClick={markAsRead}>{value}</li>
    )
    return list_item
}

NotificationItem.propTypes = {
    type: propTypes.string.isRequired,
    html: propTypes.string,
    value: propTypes.string,
    markAsRead: propTypes.func,
}