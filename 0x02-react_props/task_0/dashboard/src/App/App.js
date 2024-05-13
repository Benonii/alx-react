import './App.css';
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import React from "react";

function App() {
  return (
      <>
    <Notifications />
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
      </>
  );
}

export default App;
