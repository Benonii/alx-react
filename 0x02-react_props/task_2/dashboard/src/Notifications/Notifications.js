import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils.js";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";

export default function Notifications () {
  return (
    <div className='Notifications'>
        <p>
            Here is the list of notifications
        </p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />      
        </ul>

        <button
          style = {{right: '0'}}
          aria-label="Close"
          onClick={console.log('Close button has been clicked')}>
            <img src={img} alt="close icon" />
          </button>
    </div>
  )
}