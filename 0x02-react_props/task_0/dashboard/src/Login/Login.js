import React from "react";
import "./Login.css"

export default function Login() {
    return (
            <>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <label for="email">Email: </label>
          <input id="email" type="text" />

          <label for="passwd">Password: </label>
          <input id="passwd" type="password" />

          <button type="submit">OK</button>
      </div>
            </>
    )
}