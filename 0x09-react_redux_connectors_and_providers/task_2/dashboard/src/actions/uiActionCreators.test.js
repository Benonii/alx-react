import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { thunk } from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';


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


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('loginRequest', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('the actions LOGIN and LOGIN_SUCCESS are recieved by the store when\
        the API request is successful', async () => {
        const store = mockStore({});
        fetchMock.mock('/dist/login-success.json', {success: true});

        const expectedActions = [
            { type: LOGIN,
              user: {
                email: 'johann.salva@holberton.nz',
                password: '#Usrtestpasswd123'
              }
            },
            { type: LOGIN_SUCCESS },
        ]


        store.dispatch(loginRequest('johann.salva@holberton.nz', '#Usrtestpasswd123'));
        const receivedActions = await store.getActions();
        expect(receivedActions).toEqual(expectedActions)
    }); 
});