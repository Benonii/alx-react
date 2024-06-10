import * as actionTypes from '../actions/uiActionTypes';
import uiReducer from './uiReducer';

describe('uiReducer', () => {

    it('returns the same state as initialState when no action is passed', () => {
        const testInitialState = {
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        };
    
        expect(uiReducer(testInitialState, {type: actionTypes.TEST})).toEqual(testInitialState);  
    });

    it('returns the same state as initialState when the action \
        SELECT_COURSE is passed', () => {
            
        const testInitialState = { 
            isNotificationDrawerVisible: true,
            isUserLoggedIn: false,
            user: {}
        };

        expect(uiReducer(actionTypes.SELECT_COURSE)).toEqual(testInitialState);
    });

    it('changes isNotificationDrawerVisible when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const testInitialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };
        let reducedState = uiReducer(testInitialState, actionTypes.DISPLAY_NOTIFICATION_DRAWER);

        expect(reducedState.isNotificationDrawerVisible).toEqual(true);

        reducedState = uiReducer(reducedState, actionTypes.HIDE_NOTIFICATION_DRAWER);

        expect(reducedState.isNotificationDrawerVisible).toEqual(false);

    })


});
