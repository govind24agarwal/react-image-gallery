import React from "react";
import { bool, func } from "prop-types";
import SVG from "src/components/SVG";

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <SVG icon="left" viewBox="0 0 24 24" />
    </button>
  );
});

LeftNav.displayName = "LeftNav";

LeftNav.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};

export default LeftNav;
