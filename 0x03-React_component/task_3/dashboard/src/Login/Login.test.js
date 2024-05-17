import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe('<Login />', () => {
    it('Renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toBe(true);
    });
    
    it('Renders two input tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
    })

    it('Renders two label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2); 
    })
});
