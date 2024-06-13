import * as actionTypes from './courseActionTypes';
import { bindActionCreators} from 'redux'
import { dispatch } from 'react-redux';

export const selectCourse = (index) => ({
    type: actionTypes.SELECT_COURSE,
    index: index,
});

const boundSelectCourse = bindActionCreators(selectCourse, dispatch);

export const unSelectCourse = (index) => ({
    type: actionTypes.UNSELECT_COURSE,
    index: index,
});

export const fetchCourseSuccess = () => ({
    type: actionTypes.FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
});

const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);

export { boundSelectCourse, boundUnSelectCourse};