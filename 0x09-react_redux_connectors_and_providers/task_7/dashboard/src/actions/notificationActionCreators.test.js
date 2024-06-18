import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('markAsRead', () => {
    it('returns the write action item when called with 1', () => {
        expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1});
    });    
});

describe('setNotificationFilter', () => {
    it('returns the right action item when called with one of the filters from\
        NotificationTypeFilters', () => {
            expect(setNotificationFilter(NotificationTypeFilters.URGENT))
            .toEqual({
                type: SET_TYPE_FILTER,
                filter: "URGENT",
              });
    });
});

