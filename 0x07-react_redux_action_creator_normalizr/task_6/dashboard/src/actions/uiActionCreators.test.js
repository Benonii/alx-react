import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('login', () => {
    it('returns the right action item', () => {
        const user = {
            email: 'test@email.com',
            password: 'password@test1234',
        }

        expect(login(user.email, user.password)).toEqual({type: LOGIN, user: {...user}});
    }); 
});

describe('logout', () => {
    it('returns the right action item', () => {
        expect(logout()).toHaveProperty('type', LOGOUT);
    }); 
});

describe('displayNotificationDrawer', () => {
    it('returns the right action item', () => {
        expect(displayNotificationDrawer()).toEqual({type: DISPLAY_NOTIFICATION_DRAWER,});
    }); 
});

describe('hideNotificationDrawer', () => {
    it('returns the right action item', () => {
        expect(hideNotificationDrawer()).toEqual({type: HIDE_NOTIFICATION_DRAWER,});
    }); 
});
