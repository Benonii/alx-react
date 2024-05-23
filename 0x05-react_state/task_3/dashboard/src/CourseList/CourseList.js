import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import propTypes from "prop-types";

export default function CourseList({ listCourses=[] }) {
    if (listCourses.length === 0) {
        return <tr><td>No courses available yet</td></tr>
    } else {
        return(
                <>
            <table className={css(styles.CourseList)}>
                <thead className="table-header">
                    <CourseListRow key={1} isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow key={2} isHeader={true} textFirstCell="Course name"
                                   textSecondCell="Credit" />
                </thead>

                <tbody>
                    {listCourses.map((course) => {
                        return (
                        <CourseListRow key={course.id}
                                       textFirstCell={course.name}
                                       textSecondCell={course.credit} />
                    )})}
                </tbody>

            </table>
                </>
        )
    }
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(CourseShape),
}

const styles = StyleSheet.create({
    CourseList: {
        width: '90%',
        '.table-header': {
            fontWeight: 600,
        }  
    }
})
