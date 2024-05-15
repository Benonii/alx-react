import React from "react";
import { shallow } from 'enzyme';
import App from './App.js';


describe('<App />', () => {
    test('renders without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});
