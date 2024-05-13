import React from "react";

export default function NotificationItem({ type, html, value }) {
    return (
        <li data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}>
            {value}</li>
    );
}