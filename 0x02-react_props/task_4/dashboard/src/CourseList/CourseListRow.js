import React from "react";
import propTypes from 'prop-types';


export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    let tr;

    if (isHeader) {
      if (textSecondCell !== null) {
        tr = (
            <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th> 
            </tr>
        )
       } else {
        console.log(textFirstCell);
        tr = (
            <tr>
                <th colSpan={2}>{textFirstCell}</th>
            </tr>
        )
       }
    } else {
        tr = (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    };

    return tr
}

CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.string,
}