import React from "react";
import { shallow } from "enzyme";
import BodySectioWithnMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe('<BodySectionWithBottomMargin', () => {
    it('renders a BodySection element', () => {
        const wrapper = shallow(
        <BodySectioWithnMarginBottom title='test'>
            <p>Testing</p>
        </BodySectioWithnMarginBottom>);

        expect(wrapper.find(BodySection).length).toBe(1);
        const component = wrapper.props().children;
        expect(component.props.title).toBe('test');
        expect(component.props.children).toStrictEqual(<p>Testing</p>);
    });
});
