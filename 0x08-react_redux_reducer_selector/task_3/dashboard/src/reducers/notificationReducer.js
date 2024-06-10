import * as actionTypes from '../actions/notificationActionTypes';

const initialState = {
    notifications: [],
    filter: 'DEFAULT',
}

export default function notificationReducer(state=initialState, action) {
    const notifications = action.data;
    switch(action.type) {
        case actionTypes.FETCH_NOTIFICATIONS_SUCCESS: {
            for (const notification of notifications) {
                notification.isRead = false;
            }

            return {
                ...state,
                notifications: notifications,
            }
        }

        case actionTypes.MARK_AS_READ: {
            const id = action.index;
            const newNotifications = notifications.map((notification) => {
                if (notification.id == id) {
                    return {...notification, isRead: true};
                }

                return notification;
            })

            return {
                ...state,
                notifications: newNotifications,
            }
        }

        case actionTypes.SET_TYPE_FILTER: {
            return {
                ...state,
                filter: action.filter,
            }
        }
        default:
            return state;
    }
}