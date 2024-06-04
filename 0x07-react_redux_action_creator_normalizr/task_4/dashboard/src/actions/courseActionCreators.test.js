import { selectCourse, unSelectCourse } from "./courseActionCreators";
const {SELECT_COURSE, UNSELECT_COURSE} = require("./courseActionTypes");

describe('selectCourse', () => {
    it('returns { type: SELECT_COURSE, index: 1 } given index 1', () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    }); 
});

describe('unSelectCourse', () => {
    it('returns { type: UNSELECT_COURSE, index: 1 } given index 1', () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    }); 
});
