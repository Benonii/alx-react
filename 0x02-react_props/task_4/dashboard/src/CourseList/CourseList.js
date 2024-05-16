import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";

export default function CourseList() {
    return(
            <>
        <table>
            <thead>
                <CourseListRow key={1} isHeader={true} textFirstCell="Available courses" />
                <CourseListRow key={2} isHeader={true} textFirstCell="Course name"
                               textSecondCell="Credit" />
            </thead>

            <tbody>
                <CourseListRow key={3} textFirstCell="ES6" textSecondCell="60" />
                <CourseListRow key={4} textFirstCell="Webpack" textSecondCell="20" />
                <CourseListRow key={5} textFirstCell="React" textSecondCell="40" />
            </tbody>
        
        </table>
            </>
    )
}