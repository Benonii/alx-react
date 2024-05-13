import React from "react";
import "./Notifications.css"
import { getLatestNotification } from "../utils/utils.js"
import img from "../assets/close-icon.png"

export default function Notifications () {
  return (
    <div className='Notifications'>
        <p>
            Here is the list of notifications
        </p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent"
              dangerouslySetInnerHTML= {{ __html: getLatestNotification() }} />       
        </ul>

        <button
          style = {{right: '0'}}
          aria-label="Close"
          onClick={console.log('Close button has been clicked')}>
            <img src={img} alt="close icon" />
          </button>
    </div>
  )
}