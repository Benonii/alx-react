import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationReducer";
import { Map } from 'immutable';

describe('filterTypeSelected()', () => {
    it('works as expected', () => {
        const state = {filter: 'DEFAULT'};

        expect(filterTypeSelected(state)).toBe('DEFAULT');
    });
});

describe('getNotifications()', () => {
    it('returns a list of the message entities within the reducer', () => {
        const notifications = [
          {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available"
          },
          {
            id: 2,
            isRead: true,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ];
        const state = {
            data : notifications,
        }

        expect(getNotifications(state)).toEqual(Map(notifications));
    });
    
    describe('getUnreadNotifications()', () => {
        it('returns a list of unread message entities within the reducer', () => {
            const notifications = [
                {
                  id: 1,
                  isRead: false,
                  type: "default",
                  value: "New course available"
                },
                {
                  id: 2,
                  isRead: true,
                  type: "urgent",
                  value: "New resume available"
                },
                {
                  id: 3,
                  isRead: false,
                  type: "urgent",
                  value: "New data available"
                }
            ];
            
            const unreadNotifications = [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                },
                {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                },
            ]
            const state = {
              data : notifications,
            }

            expect(getUnreadNotifications(state)).toEqual(Map(unreadNotifications));
        });
        
    });
});

