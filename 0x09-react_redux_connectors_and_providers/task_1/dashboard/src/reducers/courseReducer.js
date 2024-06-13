import * as actionTypes from '../actions/courseActionTypes';
import { Map, setIn } from 'immutable';
import courseNormalizer from '../schema/courses';

const initialState = Map([]);

export default function courseReducer(state=initialState, action) {
    switch(action.type) {
        case actionTypes.FETCH_COURSE_SUCCESS: {
            const courseList = action.data;
            for (const course of courseList) {
                course.isSelected = false;
            }

            return initialState.merge(courseNormalizer(courseList));
        };
        case actionTypes.SELECT_COURSE: {
            return initialState.setIn(['courses' , 'id', 'isSelected'], true);
        };
        case actionTypes.UNSELECT_COURSE: {
            return initialState.setIn(['courses' , 'id', 'isSelected'], false);
        };

        default:
            return state;
    }
};