import React from "react";
import { StyleSheet, css } from "aphrodite";
// import './Login.css';

export default function Login() {
    return (
            <>
        <div className={css(styles.loginBody)}>
          <p className={css(styles.p)}>Login to access the full dashboard</p>
          <label htmlFor="email" className="label">Email: </label>
          <input id="email" type="text" className={css(styles.input)}/>

          <label htmlFor="passwd" className={css(styles.label)}>Password: </label>
          <input id="passwd" type="password" />

          <button type="submit">OK</button>
      </div>
            </>
    )
}

const styles = StyleSheet.create({
    loginBody: {
        height: '55vh',
    },

    p: {
        marginTop: 55,
        marginLeft: 40,
        fontSize: '130%',
        fontWeight: 500,
    },
          
    label: {
        marginLeft: 40,
    },
        
    input: {
        margin: 10,
    }
});