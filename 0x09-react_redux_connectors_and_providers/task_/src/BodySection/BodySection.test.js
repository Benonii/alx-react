import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe('<BodySection />', () => {
    it('renders the children and one h2 element correctly', () => {
        const wrapper = shallow(<BodySection title="test"><p>Test children node</p></BodySection>);

        const header = wrapper.find('h2');
        const paragraph = wrapper.find('p');
        
        expect(header.length).toBe(1);
        expect (paragraph.length).toBe(1);
        expect(header.text()).toContain('test');
        
        expect(paragraph.length).toBe(1);
        expect(paragraph.text()).toContain('Test children node');
    });
});
