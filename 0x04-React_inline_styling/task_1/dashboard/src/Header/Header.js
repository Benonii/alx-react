import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg"

export default function Header() {
    return (
        <>
          <div className={css(styles.header)}>
              <img src={logo} className={css(styles.appLogo)} alt="logo" />
              <h1 className={css(styles.heading)}>School dashboard</h1>
          </div>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    
    appLogo: {
      width: 250,
      height: 250,
      marginLeft: 0,
    },
      
    heading: {
      color: '#ff0000',
      fontWeight: 'bold',
    },
})