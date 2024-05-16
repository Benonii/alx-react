import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem({ type, html, value }) {
    let list_item;
    html ? list_item = (
        <li data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}></li>
    ) : list_item = (
        <li data-notification-type={type}>{value}</li>
    )
    return list_item;
}