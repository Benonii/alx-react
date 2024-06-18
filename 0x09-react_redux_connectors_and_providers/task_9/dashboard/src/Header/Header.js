import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";
import AppContext from "../App/AppContext";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

export default class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <>
        <div className={css(styles.header)}>
            <img src={logo} className={css(styles.appLogo)} alt="logo" />
            <h1 className={css(styles.heading)}>School dashboard</h1>
        </div>

        {user && (user.isLoggedIn && (
        <div id="logoutSection">
          <p>Welcome {`${user.email} `} <span onClick={logOut}>(logout)</span></p>
        </div>
    ))}
      </>
  )
  }
}

Header.contextType = AppContext
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

export const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export const mapDispatchToProps = (dispatch) => ({
  logout,
})

connect(mapStateToProps, mapDispatchToProps)(Header);
