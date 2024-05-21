import React from "react";
import "./NotificationItem.css"
import propTypes from "prop-types";
import "./Notifications.css";

export default function NotificationItem(props) {
    // const [state, setState] = React.useState(props);

    // if (props !== state) {
        
    // }
    let list_item;
    props.html ? list_item = (
        <li data-notification-type={props.type}
            dangerouslySetInnerHTML={{ __html: props.html }}
            onClick={props.markAsRead}>
            </li>
    ) : list_item = (
        <li data-notification-type={props.type} onClick={props.markAsRead}>{props.value}</li>
    )
    return list_item
}

NotificationItem.propTypes = {
    type: propTypes.string.isRequired,
    html: propTypes.string,
    value: propTypes.string,
    markAsRead: propTypes.func,
}