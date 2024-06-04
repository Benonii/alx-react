import * as actionTypes from './notificationActionTypes';

export const markAsRead = (index) => {
    return { type: actionTypes.MARK_AS_READ, index: index}
}

export const setNotificationFilter = (filter) => {
    return { type: actionTypes.SET_TYPE_FILTER, filter: filter }
}