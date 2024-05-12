import React from "react";
import PropTypes from "prop-types";
// import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn=false }) {
  listCourses = [
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit:20},
    {id: 3, name: 'React', credit: 40}
  ]

  return (
      <>
    <Notifications />
    <div className="App">
      <Header />
      {isLoggedIn ? (<CourseList listCourses={listCourses}/>) : <Login />}
      <Footer />
    </div>
      </>
  );
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
