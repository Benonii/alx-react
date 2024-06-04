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

export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, dispatch);