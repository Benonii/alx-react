import * as actionTypes from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
    isNotificationDrawerVisible: true,
    isUserLoggedIn: false,
    user: {}
});

export default function uiReducer(state=initialState, action={type: actionTypes.DEFAULT}) {
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
            });
        }

        case actionTypes.LOGIN_FAILURE: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', false);
            });
        }

        case actionTypes.LOGIN: {
            return initialState.withMutations((state) => {
                state.set('isUserLoggedIn', false);
            });
        }

        default:
            return state
    }
}
