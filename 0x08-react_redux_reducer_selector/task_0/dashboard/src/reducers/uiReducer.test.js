import * as actionTypes from '../actions/uiActionTypes';
import * as actions from '../actions/uiActionCreators';
import { selectCourse } from '../actions/courseActionCreators';
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

        expect(uiReducer(testInitialState, selectCourse)).toEqual(testInitialState);
    });

    it('changes isNotificationDrawerVisible when DISPLAY(HIDE)_NOTIFICATION_DRAWER is passed', () => {
        const testInitialState = {
            isNotificationDrawerVisible: false,
            isUserLoggedIn: false,
            user: {}
        };

        let reducedState = uiReducer(testInitialState, actions.displayNotificationDrawer());
        expect(reducedState.isNotificationDrawerVisible).toEqual(true);

        reducedState = uiReducer(reducedState, actions.hideNotificationDrawer());
        expect(reducedState.isNotificationDrawerVisible).toEqual(false);

    })
});
