import * as actionTypes from '../actions/courseActionTypes';
import { Map } from 'immutable';

const initialState = [];

export default function courseReducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_COURSE_SUCCESS: {
            const courseList = action.data;
            for (const course of courseList) {
                course.isSelected = false;
            }

            return courseList;
        };
        case actionTypes.SELECT_COURSE: {
            const id = action.index;
            const newCourseList = state.map((course) => {
                if (course.id === id) {
                    return {...course, 'isSelected': true};
                }
                return course;
            });

            return newCourseList;
        };
        case actionTypes.UNSELECT_COURSE: {
            const id = action.index;
            const newCourseList = state.map((course) => {
                if (course.id === id) {
                    return {...course, 'isSelected': false};
                }
                return course;
            });

            return newCourseList;
        };

        default:
            return state;
    }
};