import React from "react";
import propTypes from "prop-types";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";

export default function App({ isLoggedIn=false }) {
  return (
      <>
    <div className="App">
    <div className="header">
      <Header />
      <Notifications displayDrawer={false}/>
    </div>
      {isLoggedIn ? (<CourseList />) : (<Login />)}
      <Footer />
    </div>
      </>
  );
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
}