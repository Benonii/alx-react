import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

describe('<Footer />', () => {
    it('renders without crushing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true); 
    });

    it('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        const footer = wrapper.find('App-footer');
        const footerP = footer.find('<p>');
        expect(wrapper.text()).toContain('Copyright');
    });

    it('Does not display link when user is not logged in', () => {
        const contextValue = {
            user: {
                isLoggedIn: false,
            }
        }
        const wrapper = shallow(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(false);
    });

    it('Displays link when user is not logged in', () => {
        const contextValue = {
            user: {
                isLoggedIn: true,
            }
        }
        const wrapper = shallow(
        <AppContext.Provider value={contextValue}>
            <Footer />
        </AppContext.Provider>
        );
        expect(wrapper.find('a').exists()).toBe(true);
    });
    
    
});
