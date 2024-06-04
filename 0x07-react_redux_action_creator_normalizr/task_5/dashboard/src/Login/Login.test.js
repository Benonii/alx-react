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
        expect(wrapper.find('input').length).toBe(3);
    })

    it('Renders two label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('label').length).toBe(2); 
    })

    it('has submit disabled by default', () => {
        const wrapper = shallow(<Login />);
        const submitButton = wrapper.find('.submitBtn');

        expect(submitButton.prop('disabled')).toBe(true);
    });

    // it('enables submit after both inputs are not empty', () => {
    //     const wrapper = shallow(<Login />);
    //     const emailInput = wrapper.find('input[name="email"]');
    //     const passwordInput = wrapper.find('input[name="password"]');
    //     const submitButton = wrapper.find('.submitBtn');

    //     emailInput.simulate('change', { target: {value: 'test@example.com'} });
    //     passwordInput.simulate('change', { target: {value: 'test@psswd1234'} });

    //     expect(submitButton.prop('disabled')).toBe(false);
    // })
    
});
