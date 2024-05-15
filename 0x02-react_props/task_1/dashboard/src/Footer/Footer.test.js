import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

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
    
});