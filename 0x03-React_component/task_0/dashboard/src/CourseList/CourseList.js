import React from "react";
import PropTypes from "prop-types"
// import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";

export default function CourseList(listCourses=[]) {
    if (listCourses.length === 0) {
        return <tr><td>No course available yet</td></tr>
    } else {
      return (
            <>
            <table>
                    <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name"
                               textSecondCell="Credit" />
            </thead>

            <tbody>
                {listCourses.map((course) => {
                    <CourseListRow key={course.id}
                                   textFirstCell={course.name}
                                   textSecondCell={course.credit} />
                })}
            </tbody>
        
        </table>
            </>
        )
    }
}

CourseList.PropTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

