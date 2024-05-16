import React from "react";
import propTypes from "prop-types";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

export default function App({ isLoggedIn=false }) {
  const listCourses = [
    {id: 3, name: "ES6", credit: 60},
    {id: 4, name: "Webpack", credit:20},
    {id: 5, name: 'React', credit: 40}
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
    <div className="App">
    <div className="header">
      <Header />
      <Notifications displayDrawer={false} listNotifications={[]}/>
    </div>
      {isLoggedIn ? (<CourseList listCourses={listCourses}/>) : (<Login />)}
      <Footer />
    </div>
      </>
  );
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
}