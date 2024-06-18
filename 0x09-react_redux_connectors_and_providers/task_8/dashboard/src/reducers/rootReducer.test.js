import rootReducer from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer', () => {
    const testReducer = rootReducer.rootReducer(undefined, {});
    console.log(testReducer);
    it('has an emppty map as an initial state', () => {
        expect(testReducer.course).toEqual(Map({}));
        expect(testReducer.notification).toEqual(Map({"notifications": [], "filter": "DEFAULT",}));
        expect(testReducer.ui).toEqual(Map({"isNotificationDrawerVisible": true, "isUserLoggedIn": false, "user": {},}));
    });
});
