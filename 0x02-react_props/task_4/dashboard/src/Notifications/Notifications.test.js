import React from "react";
import { shallow } from 'enzyme';
import Notifications from "./Notifications.js";
import NotificationItem from "./NotificationItem.js";


describe('<Notifications />', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });


    it('renders the text "Here is the list..."', () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.text()).toContain('Here is the list of notifications');
    });

    it('displays menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications />);
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
});