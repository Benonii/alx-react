import React from "react";
import { getFullYear, getFooterCopy} from '../utils/utils.js';
import AppContext from "../App/AppContext.js";
import { connect } from 'react-redux';

export default function Footer() {
    const { user } = React.useContext(AppContext);
    return(
            <>
            {user.isLoggedIn && (
                <p><a href="#">Contact us</a></p>
            )}
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
            </>
    )
}

export const mapStateToProps = (state) => ({
    user: state.get('user'),
});

connect(mapStateToProps)(Footer);