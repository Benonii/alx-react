import React from "react";
import { StyleSheet, css } from "aphrodite";
import "./NotificationItem.css"
import propTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem(props) {
    let list_item;
    const urgencyStyle = props.type === 'default' ? styles.defaultNotification : styles.urgentNotifcation;
    props.html ? list_item = (

        <li className={css(urgencyStyle)}
            data-notification-type={props.type}
            dangerouslySetInnerHTML={{ __html: props.html }}
            onClick={props.markAsRead}>
            </li>
    ) : list_item = (
        <li className={css(urgencyStyle)}
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

const styles = StyleSheet.create({
    defaultNotification: {
        color: 'blue',
        width: '100%',
        borderBottom: '1px solid black',
        fontSize: 20,
        padding: '10px 20px',
    },
      
    urgentNotifcation: {
        color: 'red',
        width: '100%',
        borderBottom: '1px solid black',
        fontSize: 20,
        padding: '10px 20px',
    },
});