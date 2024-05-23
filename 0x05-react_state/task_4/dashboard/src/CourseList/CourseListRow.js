import React from "react";
import { StyleSheet, css} from "aphrodite";
import propTypes from 'prop-types';


export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
    const [checked, setChecked] = React.useState(false);

    function handleCheck() {
        setChecked((prevState) => !prevState);
    }
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
            <tr className={checked ? css(styles.rowChecked) : css(styles.rowStyle)}>
                <td> <input type="checkbox" checked={checked} onClick={handleCheck} />{textFirstCell}</td>
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
    },

    rowChecked: {
        backgroundColor: '#e6e4e4',
    }
})