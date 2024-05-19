import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications.js";
import NotificationItem from "./NotificationItem.js";


describe('<Notifiications />', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('tr').length).toBe(1);
    });


    it('renders the text "No new notifications for now"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.text()).toContain('No new notifications for now');
    });

    it('displays menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find('.menuItem').length).toBe(1);
    })

    it('Notifications are not displayed when display drawer is false',
        () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications-content').length).toBe(0);
    });

    it('dispalys menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.menuItem').length).toBe(1);
    });

    it('dispalys notificatoins when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('.Notifications-content').length).toBe(1); 
    });

    it('renders correctly if you pass an empty array or bad input', () => {
        let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.exists()).toBe(true);
    })

    it('renders the correct amount of notifications', () => {
        const listNotifications = [
            {
              id: 1,
              type: "default",
              value: "New course available",
              html: "",
            },
            {
              id: 2,
              type: "urgent",
              value: "New resume available",
              html: "",
            },
            {
              id: 3,
              type: "urgent",
              value: "",
              html: { __html: "<p>The right html</p>" },
            }
          ]
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    })

    it('renders the right message if you pass an empty array', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        const tableRow = wrapper.find('td');
        expect(tableRow.text()).toBe('No new notifications for now');
    })

    it('sends the right message when marking a notification to read', () => {
        const listNotifications = [
            {
              id: 1,
              type: "default",
              value: "New course available",
              html: "",
            },
          ]
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const consoleSpy = jest.spyOn(console, 'log');

        const notification = wrapper.instance();

        wrapper.find(NotificationItem).at(0).props().markAsRead();

        expect(consoleSpy).toHaveBeenCalledWith(`Notification ${listNotifications[0].id} has been marked as read`);
    });
});