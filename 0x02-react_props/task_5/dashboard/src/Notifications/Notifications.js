import React from "react";
import "./Notifications.css";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";
import NotificationItemShape from "./NotificationItemShape.js";
import propTypes from "prop-types";

export default function Notifications ({ displayDrawer=false, listNotifications=[] }) {
  if (listNotifications.length === 0) {
    return (
      <div className='Notifications'>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && ( 
          <div className='Notifications-content'>
            <tr><td>No new notifications for now</td></tr>
          </div>)}
        </div>
    )
  } else {
    return (
        <>

        <div className='Notifications'>
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
          {displayDrawer && ( 
            <div className='Notifications-content'>
              <p>
                  Here is the list of notifications
              </p>
              <ul>
                {listNotifications.map((notification) => {
                  return (
                    <NotificationItem key={notification.id}
                                      type={notification.type}
                                      value={notification.value}
                                      html={notification.html} />
                  );
                })};    
              </ul>

              <button
                style = {{right: '0'}}
                aria-label="Close"
                onClick={() => {console.log('Close button has been clicked')}}>
                  <img src={img} alt="close icon" />
                </button>
              </div>
          )}
        </div>
        </>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape)
}