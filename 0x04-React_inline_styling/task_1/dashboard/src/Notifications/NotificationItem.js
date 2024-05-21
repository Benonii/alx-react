import React from "react";
import { StyleSheet, css } from "aphrodite";
import "./NotificationItem.css";
import propTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem(props) {
    let list_item;
    props.html ? list_item = (

        <li
            data-notification-type={props.type}
            dangerouslySetInnerHTML={{ __html: props.html }}
            onClick={props.markAsRead}>
            </li>
    ) : list_item = (
        <li
            data-notification-type={props.type} onClick={props.markAsRead}>{props.value}</li>
    )
    return list_item
}

NotificationItem.propTypes = {
    type: propTypes.string.isRequired,
    html: propTypes.string,
    value: propTypes.string,
    markAsRead: propTypes.func,
}