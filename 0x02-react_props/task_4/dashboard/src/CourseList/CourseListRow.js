import React from "react";
import PropTypes from 'prop-types';


export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    let tr;

    if (isHeader) {
      textSecondCell ?
        tr = (
            <>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th> 
            </>):
        tr = (<th colSpan={2}>{textFirstCell}</th>)
    } else {
        tr = (
            <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </>
        )
    };

    return tr;
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.obeOfType([
        PropTypes.string,
        PropTypes.number
    ]),
}