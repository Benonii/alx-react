import propTypes from "prop-types";

export default propTypes.shape({
   id: propTypes.number.isRequired,
   name: propTypes.string.isRequired,
   credit: propTypes.number.isRequired
}
)