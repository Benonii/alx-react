import * as actionTypes from './courseActionTypes';

export const selectCourse = (index) => ({
    type: actionTypes.SELECT_COURSE,
    index: index,
});

export const unSelectCourse = (index) => ({
    type: actionTypes.UNSELECT_COURSE,
    index: index,
});