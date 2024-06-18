import React from "react";
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';

describe('<NotificationItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correct html for type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.prop('data-notification-type')).toEqual('default');
        expect(wrapper.text()).toEqual('test');
    });

    it('renders the text "Here is the list..."', () => {
        const wrapper = shallow(<NotificationItem html='<p>The right HTML</p>' />);
        expect(wrapper.html().replace(/ class="[^"]*"/, '')).toEqual('<li><p>The right HTML</p></li>');
    });
});