import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
    return (
            <>
        <div className={css(styles.loginBody)}>
          <p className={css(styles.p)}>Login to access the full dashboard</p>
          <div className={css(styles.formContainer)}>
            <label htmlFor="email" className="label">Email: </label>
            <input id="email" type="text" className={css(styles.input)}/>

            <label htmlFor="passwd" className={css(styles.label)}>Password: </label>
            <input id="passwd" type="password" className={css(styles.input)}/>
          </div>
          
          <button type="submit" className={css(styles.btn)}>OK</button>
      </div>
            </>
    )
}

const styles = StyleSheet.create({
    loginBody: {
        display: 'flex',
        flexDirection: 'column',
        height: '55vh',
    },

    p: {
        marginTop: 55,
        marginLeft: 40,
        fontSize: '130%',
        fontWeight: 500,
    },

    formContainer: {
        display: 'flex',
        alignItems: 'center',
        "@media (max-width: 900px)": {
            flexDirection: 'column',
            alignItems: 'left',
        }
    },
          
    label: {
        marginBottom: 5,
    },
        
    input: {
        margin: 10,
        width: 300,
        heihgt: 20,
    },

    btn: {
        width: 50,
        height: 30,
        backgroundColor: 'transparent',
        border: '2px solid dark-yellow',
    },

    
});