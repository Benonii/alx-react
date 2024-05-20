import React from "react";
import propTypes from 'prop-types';


export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    let tr;

    const rowStyle = {
        backgroundColor: "#f5f5ab",
    }

    const headerStyle = {
        backgroundColor: "#deb5b545",
    }

    if (isHeader) {
      if (textSecondCell !== null) {
        tr = (
            <tr style={headerStyle}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th> 
            </tr>
        )
       } else {
        console.log(textFirstCell);
        tr = (
            <tr style={headerStyle}>
                <th colSpan={2}>{textFirstCell}</th>
            </tr>
        )
       }
    } else {
        tr = (
            <tr style={rowStyle}>
                <td >{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    };

    return tr
}

CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
    ]),
}