import React from "react";
import { getFullYear, getFooterCopy} from '../utils/utils.js';
import AppContext from "../App/AppContext.js";

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