import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe('< Header />', () => {
    it('renders withour crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders an image', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains('img'))
    });

    it('Renders a level 1 headeing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.contains('h1'));
    });
});

