import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('<Footer />', () => {
    it('renders without crushing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(True); 
    });

    it('renders the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('Copyright')).toBe(True);
    });
    
});
