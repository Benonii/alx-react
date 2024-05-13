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

    it('renders correctly with an empty array pr bad input', () => {
        let wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.exists()).toBe(true);

        wrapper = shallow(<Notifications listCourses="[]" />);
        expect(wrapper.extsts()).toBe(true)
    });

    it('renders the correct amount of notifications', () => {
        const listCourses = [
            {id: 1, name: "ES6", credit: 60},
            {id: 2, name: "Webpack", credit:20},
            {id: 3, name: 'React', credit: 40}
        ];
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.find(CourseListRow).length).toBe(3);
    })
});
