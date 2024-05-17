import React, { Component } from "react";
import "./Notifications.css";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";
import NotificationItemShape from "./NotificationItemShape.js";
import propTypes from "prop-types";

export default class Notifications extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
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
                  {this.props.listNotifications.map((notification) => {
                    return (
                      <NotificationItem key={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={() => {this.markAsRead(notification.id)}}/>
                    )
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
}


Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape)
};