import PropTypes from "prop-types";

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    html: PropTypes.string,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
});