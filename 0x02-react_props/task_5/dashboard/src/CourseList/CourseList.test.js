import React from "react";
import { shallow } from "enzyme";
import CourseList from  "./CourseList";
import CourseListRow from "./CourseListRow";

describe('<CourseList', () => {
    it('Renders without crashing', () => {
        wrapper = shallow(<CourseList />);
        expect(wrapper.exists()).toBe(true);
    });

    it('Renders all 5 rows', () => {
        wrapper = shallow(<CoursList />)
        expect(wrapepr.find(CourseListRow).length).toBe(5);
    });
});
