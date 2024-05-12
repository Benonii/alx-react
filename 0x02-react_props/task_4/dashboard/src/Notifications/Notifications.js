import React from "react";
import PropTypes from "prop-types";
// import "./Notifications.css";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";
import NotifiationItemShape from "./NotifiationItemShape.js";

export default function Notifications ({ displayDrawer=false, listNotifications=[] }) {
  if (listNotifications.length === 0) {
    return <tr><td>No new notifications for now</td></tr>
  } else {
    return (
        <>
      <div className="mewnuItem">
            <p>Your notifications</p>
      </div>
      
      {displayDrawer && ( 
          <div className='Notifications'>
          <p>
              Here is the list of notifications
          </p>
          <ul>
            {listNotifications.map((notification) => {
              <NotificationItem type={notification.type}
                                value={notification.value}
                                html={notification.html} />
            })};     
          </ul>

          <button
            style = {{right: '0'}}
            aria-label="Close"
            onClick={console.log('Close button has been clicked')}>
              <img src={img} alt="close icon" />
            </button>
      </div>
      )}
        </>
    )
  }
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotifiationItemShape)
}