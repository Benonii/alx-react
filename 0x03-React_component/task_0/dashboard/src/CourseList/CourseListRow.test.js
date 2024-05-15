import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('<CourseListRow />', () => {

    it('Renders one row that spans two columns', () => {
        const wrapper = shallow(<CourseListRow
            isHeader={true}
            textFirstCell="First cell" />)
        expect(wrapper.prop('colSpan')).toBe(2); 
    });

    it('Renders two rows of th elements', () => {
        const wrapper = shallow(<CourseListRow
            isHeader={true}
            textFirstCell="First cell"
            textSecondCell="Second cell" />);
        expect(wrapper.find('<th>').length).toBe(2);
    });

    it('Renders two rows of td elementss', () => {
        const wrapper = shallow(<CourseListRow
            isHeader={false}
            textFirstCell="First cell"
            textSecondCell="Second cell" />);
            tableRow = wrapper.find('<tr>')
        expect(tableRow.find('<td>').length).toBe(2);
    });
});
