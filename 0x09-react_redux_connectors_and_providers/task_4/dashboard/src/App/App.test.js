import React from "react"
import { shallow } from 'enzyme';
import App from './App.js';
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js"
import Login from "../Login/Login.js";
import CourseList from "../CourseList/CourseList.js";
import { mapStateToProps } from './App.js';
import { fromJS } from "immutable";

describe('<App /> when user is not logged in', () => {
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

    // it('Contains the Login component', () => {
    //     const wrapper = shallow(<App />);
    //     const login = wrapper.find(Login);
    //     expect(login.exists()).toBe(true);
    // })

    it('Contains the Footer component', () => {
        const wrapper = shallow(<App />);
        const footer = wrapper.find(Footer);
        expect(footer.exists()).toBe(true);
    })

    it('Does not render CourseList', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).length).toBe(0);
    });

    // it('has state updated correctly when logIn is called', () => {
    //     const wrapper = shallow(<App />);
    //     wrapper.instance().logIn();

    //     expect(wrapper.state().user.isLoggedIn).toBe(true)
    // })
});

describe('<App /> when user user is logged in', () => {
    // it('Does not contain the Login component', () => {
    //     const wrapper = shallow(<App />);
    //     wrapper.setState({ user: { isLoggedIn: true } })
    //     expect(wrapper.find(Login).length).toBe(0)
    // });

    // it('Contains the CourseList component', () => {
    //     const wrapper = shallow(<App />);
    //     wrapper.setState({ user: { isLoggedIn: true } })
    //     expect(wrapper.find(CourseList).length).toBe(1);
    // });
    
    // it('Calling logOut alters the state properly', () => {;
    //     const wrapper = shallow(<App />);
    //     wrapper.setState({ user: { isLoggedIn: true } })

    //     const app = wrapper.instance();
    //     app.logOut();
    //     // console.log(wrapper.state())
    //     expect(wrapper.state().user.isLoggedIn).toBe(false);
    // });

    // it('has a default value of false for displayDrawer', () => {
    //     const wrapper = shallow(<App />);
    //     expect(wrapper.state().displayDrawer).toBe(false);
    // });

    // it('Changed displayDrawer to true when running handleDisplayDrawer', () => {
    //     const wrapper = shallow(<App />);
    //     const app = wrapper.instance();

    //     app.handleDisplayDrawer();
    //     expect(wrapper.state().displayDrawer).toBe(true);
    // });

    // it('Changed displayDrawer to false when running handleHideDrawer', () => {
    //     const wrapper = shallow(<App />);
    //     const app = wrapper.instance();

    //     app.handleHideDrawer();
    //     expect(wrapper.state().displayDrawer).toBe(false);
    // });

    it('Updates the list of notifications when they are marked as read', () => {
        const wrapper = shallow(<App />);
        const testListNotifications = [{id: 1, type: 'default', value: 'Test Notification'}]

        wrapper.setState({listNotifications: testListNotifications})
        expect(wrapper.state().listNotifications.length).toBe(1);

        const notifications = wrapper.instance();
        notifications.markNotificationsAsRead(1);
        expect(wrapper.state().listNotifications.length).toBe(0);

    });
});

describe('mapToState()', () => {
    it('returns the right object when passing state', () => {
        let state = fromJS({
            isLoggedIn: undefined,
            displayDrawer: undefined,
        });

        console.log(mapStateToProps(state));
        expect(mapStateToProps(state)).toEqual({
            isLoggedIn: undefined,
            displayDrawer: undefined,
            login: expect.any(Function),
        });
    });
});
