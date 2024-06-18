import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import AppContext from "../App/AppContext";
import App from "../App/App";

describe('< Header />', () => {
    it('renders withour crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders an image', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains('img'))
    });

    it('"Renders a level 1 headeing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains('h1'));
    });

    it('Does not contain a logoutSection section when there is no user', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('#logoutSectoin').length).toBe(0);
    });

    // it('renders logoutSection when user is defined and logged in', () => {
    //     const appWrapper = shallow(<App />)
    //     const testUser = appWrapper.state().user;
    //     const mockLogOut = jest.fn();
    //     const wrapper = shallow(
    //       <AppContext.Provider value={{ user: testUser, logOut: mockLogOut }}>
    //         <Header />
    //       </AppContext.Provider>
    //     );
    
    //     const logoutSection = wrapper.find('#logoutSection');
    //     expect(logoutSection.exists()).toBe(true);

    //     expect(mockLogOut).toHaveBeenCalled();
    // });      
});

