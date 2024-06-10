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

const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);

export { boundSelectCourse, boundUnSelectCourse};