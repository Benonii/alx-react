import React, { Component } from "react";
import propTypes from "prop-types";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

export default class App extends React.component {
  constructor(props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
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
        {isLoggedIn ? (<CourseList listCourses={listCourses}/>) : (<Login />)}
        <Footer />
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
  logOut: function () {}
}
