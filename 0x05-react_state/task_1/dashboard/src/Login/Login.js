import React from "react";
import { StyleSheet, css } from "aphrodite";
import className from "classnames";

export default function Login() {
    const [formState, setFormState] = React.useState({
        email: '',
        password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const [enableSubmit, setEnableSubmit] = React.useState(false)

    function handleChangeEmail(e) {
        const value = e.target.value;
        setFormState({
            ...formState,
            email: value,
        })
        setEnableSubmit(validateInput());
        console.log(formState);
        console.log(enableSubmit)
    }

    function handleChangePassword(e) {
        const value = e.target.value;
        setFormState({
            ...formState,
            password: e.target.value,
        })
        setEnableSubmit(validateInput());
        console.log(formState);
        console.log(enableSubmit)

    }

    function validateInput() {
        return (formState.email !== '' && formState.password !== '');
    }


    function handleLoginSubmit(e) {
        console.log(formState);
        console.log(enableSubmit)
        e.preventDefault();
        setIsLoggedIn(true);
    }
    return (
            <>
        <div className={css(styles.loginBody)}>
          <p className={css(styles.p)}>Login to access the full dashboard</p>
          <div className={css(styles.formContainer)}>

            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email" className="label">Email: </label>
                <input id="email" type="text" className={css(styles.input)}
                       name='email' onChange={handleChangeEmail}/>

                <label htmlFor="passwd" className={css(styles.label)}>Password: </label>
                <input id="passwd" type="password" className={css(styles.input)}
                       name='password' onChange={handleChangePassword}/>

                <input type="submit" className={className(css(styles.btn), 'submitBtn')} disabled={!enableSubmit} />
            </form>
          </div>
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
        height: 20,
    },

    btn: {
        width: 50,
        height: 30,
        backgroundColor: 'transparent',
        border: '2px solid dark-yellow',
    },

    
});