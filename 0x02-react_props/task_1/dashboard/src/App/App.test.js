import React from "react";
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";



describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        const notifications = wrapper.find(Notifications);
        expect(notifications.exists()).toBe(true);
    })

    it('Contains the Header component', () => {
        const wrapper = shallow(<App />);
        const header = wrapper.find(Header);
        expect(header.exists()).toBe(true);
    })

    it('Contains the Login component', () => {
        const wrapper = shallow(<App />);
        const login = wrapper.find(Login);
        expect(login.exists()).toBe(true);
    })

    it('Contains the Footer component', () => {
        const wrapper = shallow(<App />);
        const footer = wrapper.find(Footer);
        expect(footer.exists()).toBe(true);
    })
});
