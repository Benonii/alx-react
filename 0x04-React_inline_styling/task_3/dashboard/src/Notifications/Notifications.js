import React, { Component } from "react";
import { StyleSheet, css} from "aphrodite";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";
import NotificationItemShape from "./NotificationItemShape.js";
import propTypes from "prop-types";

export default class Notifications extends Component {
  constructor(props) {
    super(props)
  //   this.state = {
  //     listNotifications: this.props.listNotifications,
  //   }
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // shouldComponentUpdate() {
  //   if (this.props.listNotifications > this.state.listNotifications) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

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
          <div className={css(styles.notifications)}>
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            {displayDrawer && ( 
              <div className={css(styles.notificationsContent)}>
                <p>
                    Here is the list of notifications
                </p>
                <ul className={css(styles.notificationsList)}>
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
                  className={css(styles.button)}
                  style = {{right: '0'}}
                  aria-label="Close"
                  onClick={() => {console.log('Close button has been clicked')}}>
                    <img className={css(styles.buttonImg)} src={img} alt="close icon" />
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

const styles = StyleSheet.create({
  notifications: {
      zIndex: 2,
  },
  menuItem: {
    textAlign: 'right',
    marginRight: 10,
    fontSize: '120%',
    fontWeight: 500,
  },

  notificationsContent: {
    position: 'relative',
    border: '1px dashed red',
    padding: '10px 50px 10px 50px',
  },

  notificationsList: {
    listStyle: 'none',
  },

  button: {
      marginTop: 10,
      marginRight: 15,
      position: 'absolute',
      backgroundColor: 'transparent',
      border: 'none',
      width: 10,
      height: 10,
      top: 0,
      right: 0,
  },

  buttonImg: {
      width: 10,
  },

  defaultNotification: {
      color: 'blue',
  },
    
  urgentNotifcation: {
      color: 'red',
  }
  
})