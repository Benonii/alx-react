import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    isNotificationDrawerVisible: true,
    isUserLoggedIn: false,
    user: {}
});



export default function uiReducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER: {
            return initialState.withMutations((state) => {
                state.set('isNotificationDrawerVisible', true);
            });
        }

        case actionTypes.HIDE_NOTIFICATION_DRAWER: {
            return initialState.withMutations((state) => {
                state.set('isNotificationDrawerVisible', false)
            });
        }

        case actionTypes.LOGIN_SUCCESS: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', true);
                state.set('user', action.data);
            });
        }

        case actionTypes.LOGIN_FAILURE: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', false);
            });
        }

        case actionTypes.LOGIN: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', true);
                state.set('user', action.user);
            });
        }

        case actionTypes.LOGOUT: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', false);
                state.set('user', null);
            })
        }

        default:
            return state;
    }
}
