import React from "react";
import { bool, func, string } from "prop-types";
import BlurHashImage from "./BlurHashImage";

const defaultProps = {
  description: "",
  fullscreen: "",
  isFullscreen: false,
  originalAlt: "",
  originalHeight: "",
  originalWidth: "",
  originalTitle: "",
  sizes: "",
  srcSet: "",
  loading: "eager",
};

const Item = React.memo((props) => {
  const {
    description,
    fullscreen, // fullscreen version of img
    handleImageLoaded,
    isFullscreen,
    onImageError,
    original,
    originalAlt,
    originalHeight,
    originalWidth,
    originalTitle,
    sizes,
    srcSet,
    loading,
  } = { ...defaultProps, ...props };
  const itemSrc = isFullscreen ? fullscreen || original : original;

  return (
    <React.Fragment>
      <BlurHashImage
        src={itemSrc}
        alt={originalAlt}
        srcSet={srcSet}
        height={originalHeight}
        width={originalWidth}
        sizes={sizes}
        title={originalTitle}
        onLoad={(event) => handleImageLoaded(event, original)}
        onError={onImageError}
        loading={loading}
      />
      {description && (
        <span className="image-gallery-description">{description}</span>
      )}
    </React.Fragment>
  );
});

Item.displayName = "Item";

Item.propTypes = {
  description: string,
  fullscreen: string, // fullscreen version of img
  handleImageLoaded: func.isRequired,
  isFullscreen: bool,
  onImageError: func.isRequired,
  original: string.isRequired,
  originalAlt: string,
  originalHeight: string,
  originalWidth: string,
  originalTitle: string,
  sizes: string,
  srcSet: string,
  loading: string,
};

export default Item;
