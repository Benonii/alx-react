import React from "react";
import "./Header.css";
import logo from "../src/assets/holberton-logo.jpg"

export default function Header() {
    return (
        <>
        <div className="App-header">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
            </div>
        </div>
        </>
    )
}