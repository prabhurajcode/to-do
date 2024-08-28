import PropTypes from "prop-types";

import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    High: { backgroundColor: "#eb8783" },
    Medium: { backgroundColor: "#fda821" },
    Low: { backgroundColor: "#ffd12c" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

Tag.propTypes = {
  tagName: PropTypes.string,
  selectTag: PropTypes.func,
  selected: PropTypes.string,
};

export default Tag;
