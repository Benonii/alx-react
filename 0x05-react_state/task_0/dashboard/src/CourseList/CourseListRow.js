import React from "react";
import { StyleSheet, css} from "aphrodite";
import propTypes from 'prop-types';


export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    let tr;
    if (isHeader) {
      if (textSecondCell !== null) {
        tr = (
            <tr className={css(styles.headerStyle)}>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th> 
            </tr>
        )
      } else {
        tr = (
            <tr className={css(styles.headerStyle)}>
                <th colSpan="2">{textFirstCell}</th>
            </tr>
        )
       }
    } else {
        tr = (
            <tr className={css(styles.rowStyle)}>
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

const styles = StyleSheet.create({
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },

    headerStyle: {
        backgroundColor: '#deb5b545',
    }
})