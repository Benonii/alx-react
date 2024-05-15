import React, { Component } from "react";
import PropTypes from "prop-types";
// import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

export default class App extends Component {
  constructor(props) {
    super(props)
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
        html: { __html: getLatestNotification() },
      }
    ]

    return (
        <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        {isLoggedIn ? (<CourseList listCourses={listCourses}/>) : <Login />}
        <Footer />
      </div>
        </>
    );
  }
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
}
