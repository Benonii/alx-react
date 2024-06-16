import React, { Component } from "react";
import { StyleSheet, css } from 'aphrodite';
import propTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import AppContext from "./AppContext";
import { connect } from "react-redux";
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "../actions/uiActionCreators";
import uiReducer from "../reducers/uiReducer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    // this.logIn = this.logIn.bind(this);
    // this.logOut = this.logOut.bind(this);
    this.markNotificationsAsRead = this.markNotificationsAsRead.bind(this);
    this.state = {
      listNotifications: [
        {
          id: 1,
          type: "default",
          value: "New course available",
          html: "",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
          html: "",
        },
        {
          id: 3,
          type: "urgent",
          value: "",
          html: getLatestNotification(),
        }
      ],
      // displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      // logOut: this.logOut,
    }

    // this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    // this.handleHideDrawer = this.handleHideDrawer.bind(this);
  };

  static defaultProps =  {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
   }

  // logIn(email, password) {
  //   const user = {email: email, password: password, isLoggedIn: true}
  //   this.setState({
  //     user: user,
  //   })
  // }

  // logOut() {
  //   this.setState({
  //     user: {
  //       email: '',
  //       password: '',
  //       isLoggedIn: false,
  //     }
  //   })
  // }

  componentDidMount() {
    if (typeof document !== undefined) {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    if (typeof document !== undefined) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown(event) {
    event.preventDefault();
    if (event.ctrlKey && event.key === 'h') {
      this.props.logOut();
      alert('Logging you out');
    }
  }

  // handleDisplayDrawer() {
  //   this.setState({
  //     displayDrawer: true,
  //   });
  // }

  // handleHideDrawer() {
  //   this.setState({
  //     displayDrawer: false,
  //   });
  // }

  markNotificationsAsRead(id) {
    const unreadNotifications = [];
    this.state.listNotifications.map((notification) => {
      if(notification.id !== id) {
        unreadNotifications.push(notification);
      }
    })
    this.setState({
      listNotifications: unreadNotifications,
    })
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    // console.log('Are we locked in?', isLoggedIn);
    const logIn = this.props.login;
    const displayNotificationDrawer = this.props.displayNotificationDrawer;
    const hideNotificationDrawer = this.props.hideNotificationDrawer;
    const listCourses = [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit:20},
      {id: 3, name: 'React', credit: 40}
    ]

    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.state.logOut}}>
        <div className="App">
          <div className="header">
            <Header />
            <Notifications
              displayDrawer={this.props.displayDrawer}
              listNotifications={this.state.listNotifications}
              markNotificationsAsRead={this.markNotificationsAsRead}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer} />
          </div>

          <div className={css(styles.body)}>
            {isLoggedIn ? (

              <>
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses}/>
            </BodySectionWithMarginBottom>
            <BodySection title="News from the School">
                <p>Random Text</p>
            </BodySection>
              </>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={() => logIn}/>
              </BodySectionWithMarginBottom>
            )}
            <div className="news">
            </div>
          </div>

          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    )
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  displayDrawer: propTypes.bool,
  displayNotificationDrawer: propTypes.func,
  hideNotificationDrawer: propTypes.func,
};



const styles = StyleSheet.create({
  header: {
    borderBottom: '2px solid #ff0000',
  },

  body: {
      height: '55vh',
      borderTop: '2px solid #ff0000',
  },

  footer: {
    borderTop: '2px solid #ff0000',
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: '130%',
    fontheight: 500,
  }
});

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
  login: () => loginRequest,
});

export const mapDisplayNotificationDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
}

connect(mapStateToProps(uiReducer()), mapDisplayNotificationDispatchToProps)(App);
