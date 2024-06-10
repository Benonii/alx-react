import * as actionTypes from '../actions/courseActionTypes';
import * as actionCreators from '../actions/courseActionCreators';
import courseReducer from './courseReducer';

describe('courseReducer()', () => {
    it('has an emtpy array for a default value', () => {
        expect(courseReducer([], {type: actionTypes.TEST})).toEqual([]);
    });

    it('returns the passed data with the FET_COURSE_SUCCESS action', () => {
        const expectedData = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ]

        const returnedData = courseReducer([], actionCreators.fetchCourseSuccess());        
        expect(returnedData).toEqual(expectedData);
    });

    it('returned the data with the right item updated with SELECT_COURSE', () => {
        const testInitialState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ]

        const returnedData = courseReducer(testInitialState, actionCreators.selectCourse(2));
        console.log(returnedData[1])
        expect(returnedData[1].isSelected).toBe(true);
    });

    it('returned the data with the right item updated with UNSELECT_COURSE', () => {
        const testInitialState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: true,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
        ]

        const returnedData = courseReducer(testInitialState, actionCreators.unSelectCourse(2));
        console.log(returnedData[1])
        expect(returnedData[1].isSelected).toBe(false);
    });
});
