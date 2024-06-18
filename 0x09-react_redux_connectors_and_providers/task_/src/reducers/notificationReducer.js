import * as actionTypes from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import notificationsNormalizer from '../schema/notifications';

const initialState = Map({
    notifications: [],
    filter: 'DEFAULT',
});

export default function notificationReducer(state=initialState, action) {
    const notifications = action.data;
    switch(action.type) {
        case actionTypes.FETCH_NOTIFICATIONS_SUCCESS: {
            for (const notification of notifications) {
                notification.isRead = false;
            }

            return state.merge(notificationsNormalizer(notifications));
        }

        case actionTypes.MARK_AS_READ: {
            return state.setIn(['notifications', 'id', 'isRead'], true)
            // // const id = action.index;
            // // const newNotifications = notifications.map((notification) => {
            // //     if (notification.id == id) {
            // //         return {...notification, isRead: true};
            // //     }

            // //     return notification;
            // }

            // return {
            //     ...state,
            //     notifications: newNotifications,
            // }
        }

        case actionTypes.SET_TYPE_FILTER: {
            return state.set('filter', action.filter);
        }
        default:
            return state;
    }
};

export const filterTypeSelected = (state) => {
    return state.filter;
};

export const getNotifications = (state) => {
    const notifications = state.data;
    for (const notification of notifications) {
        notification.isRead = false;
    }

    return Map(notifications);
};

export const getUnreadNotifications = (state) => {
    const notifications = state.data;
    const unreadNotifications = notifications.map((notification) => {
        if (!notification.isRead) {
            return notification;
        }
    })

    return Map(unreadNotifications);
};