import * as actionTypes from '../actions/courseActionTypes';
import * as actionCreators from '../actions/courseActionCreators';
import courseReducer from './courseReducer';

describe('courseReducer()', () => {
    it('has an emtpy array for a default value', () => {
        expect(courseReducer([], {type: actionTypes.TEST})).toEqual([]);
    });

    it('returns the passed data with the FET_COURSE_SUCCESS action', () => {
        const expectedData = {"entities": {
          "courses":{
            "1": {"credit": 60, "id": 1, "isSelected": false, "name": "ES6"},
            "2": {"credit": 20, "id": 2, "isSelected": false, "name": "Webpack"},
            "3": {"credit": 40, "id": 3, "isSelected": false, "name": "React"}}},
            
            "result": [1, 2, 3]
          }

        const returnedData = courseReducer([], actionCreators.fetchCourseSuccess()).toJS();        
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

        const returnedData = courseReducer(testInitialState, actionCreators.selectCourse(2)).toJS();
        expect(returnedData.courses.id.isSelected).toBe(true);
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

        const returnedData = courseReducer(testInitialState, actionCreators.unSelectCourse(2)).toJS();
        expect(returnedData.courses.id.isSelected).toBe(false);
    });
});
