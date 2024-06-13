import * as actionTypes from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

export const markAsRead = (index) => {
    return { type: actionTypes.MARK_AS_READ, index: index}
}

export const boundMarkAsRead = bindActionCreators(markAsRead, dispatch);

export const setNotificationFilter = (filter) => {
    return { type: actionTypes.SET_TYPE_FILTER, filter: filter }
}

export const fetchNotificationsSuccess = () => {
    return {
        type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS,
        data: [
          {
            id: 1,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            type: "urgent",
            value: "New data available"
          }
        ]
    }
}

export const setTypeFilter = () => ({
    type: actionTypes.SET_TYPE_FILTER,
    filter: "URGENT"
});

export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);