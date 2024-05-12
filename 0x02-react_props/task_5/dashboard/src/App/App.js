import React from "react";
import PropTypes from "prop-types";
// import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn=false }) {
  return (
      <>
    <Notifications />
    <div className="App">
      <Header />
      isLoggedIn ? <CourseList /> : <Login />
      <Footer />
    </div>
      </>
  );
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
