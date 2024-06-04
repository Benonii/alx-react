import React, { Component } from "react";
import { StyleSheet, css} from "aphrodite";
import img from "../assets/close-icon.png"
import NotificationItem from "./NotificationItem.js";
import NotificationItemShape from "./NotificationItemShape.js";
import propTypes from "prop-types";
import classNames from "classnames";

export default class Notifications extends Component {
  constructor(props) {
    super(props)
    this.markNotificationsAsRead = this.props.markNotificationsAsRead;
    this.handleDisplayDrawer = this.props.handleDisplayDrawer;
    this.handleHideDrawer = this.props.handleHideDrawer;
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
  }


  render() {
    const { displayDrawer, listNotifications } = this.props;
    if (listNotifications.length === 0) {
      return (
        <div className='Notifications'>
          <div className="menuItem">
            <p className="shakeItOff" onClick={(this.handleDisplayDrawer)}>Your notifications</p>
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
          <div className="notifications">
            <div className={css(styles.menuItem)}>
              <p className="shakeItOff" onClick={(this.handleDisplayDrawer)} >Your notifications</p>
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
                                        markAsRead={() => {this.markNotificationsAsRead(notification.id)}}/>
                    )
                  })};    
                </ul>

                <button
                  data-testid="close-button"
                  className={classNames(css(styles.button), 'closeBtn')}
                  style = {{right: '0'}}
                  aria-label="Close"
                  onClick={this.handleHideDrawer}>
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
  listNotifications: propTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: propTypes.func.isRequired,
  handleHideDrawer: propTypes.func.isRequired,
  markNotificationAsRead: propTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
}

const translateKeyFrames = {
  '0%': {
      transform: 'translateY(0)',
  },

  '25%': {
      transform: 'translateY(5px)'
  },

  '50%': {
      transform: 'translate(0)',
  },

  '75%': {
      transform: 'translateY(-5px)',
  },

  '100%': {
      transform: 'translateY(0)',
  }
};

const opacitykeyFrames = {
  'from ': {
      opacity: 0.5,
  },

  'to': {
      opacity: 1,
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    marginRight: 10,
    fontSize: '120%',
    fontWeight: 500,

    'shakeItOff': {
      ':hover': {
          animationName: [translateKeyFrames, opacitykeyFrames],
          animationDuration: '3s 1.2s',
          animationIterationCount: 'infinite',
      }
    },
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
});