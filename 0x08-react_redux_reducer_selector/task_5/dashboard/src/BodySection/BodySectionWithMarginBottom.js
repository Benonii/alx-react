import React from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";
import propTypes from "prop-types"

export default function BodySectioWithnMarginBottom(props) {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...props} />
        </div>
    )
}

BodySectioWithnMarginBottom.propTypes = {
    title: propTypes.string,
    children: propTypes.node,
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: 40,
    }
})