import React, { Component } from "react";
import propTypes from "prop-types";
import {StyleSheet, css } from 'aphrodite';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static defaultProps =  {
    isLoggedIn: false,
    logOut: function () {console.log()},
   }

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

  render() {
    const isLoggedIn = this.props.isLoggedIn
    const listCourses = [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit:20},
      {id: 3, name: 'React', credit: 40}
    ]

    const listNotifications = [
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
    ]

    return (
        <>
      <div className="App">
        <div className="header">
          <Header />
          <Notifications displayDrawer={false} listNotifications={listNotifications}/>
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
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <div className="news">
          </div>
        </div>

        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
        </>
    )
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: function() {},
}

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