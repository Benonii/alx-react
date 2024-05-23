import React from "react";
import { getFullYear, getFooterCopy} from '../utils/utils.js';

export default function Footer() {
    return(
            <>
        <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </div>
            </>
    )
}