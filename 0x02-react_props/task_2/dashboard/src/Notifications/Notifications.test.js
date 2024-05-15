import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications.js";
import NotificationItem from "./NotificationItem.js";


describe('', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });


    it('renders the text "Here is the list..."', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

});
