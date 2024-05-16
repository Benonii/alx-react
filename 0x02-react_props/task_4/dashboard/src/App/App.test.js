import React from "react"
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js"
import Login from "../Login/Login.js";
import CourseList from "../CourseList/CourseList.js";

describe('<App /> when isLoggedIn is false', () => {
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

    it('Does not render CourseList', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).length).toBe(0);
    });
});

describe('<App /> when isLoggedIn is true', () => {
    it('Does not contain the Login component', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find(Login).length).toBe(0)
    });

    it('Contains the CourseList component', () => {
        const wrapper = shallow(<App isLoggedIn={true} />);
        expect(wrapper.find(CourseList).length).toBe(1);
    }); 
});