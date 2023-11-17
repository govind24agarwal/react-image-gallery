import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

const BlurHashImage = ({src, alt, srcSet, height, width, sizes, title, onLoad, onError, loading}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if(!src) return;
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    imageLoaded ? 
      <img
        className="image-gallery-image"
        alt={alt}
        srcSet={srcSet}
        height={height}
        width={width}
        sizes={sizes}
        title={title}
        onLoad={onLoad}
        onError={onError}
        loading={loading}
        src={src}
        // loading="lazy"
      />
    :
      <div className="overflow-hidden">
        <Blurhash
          hash="LrJk7Vt7-nt6~WofWUj[9vjZIpWB"
          width="100%"
          height="46vw"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        {/* viewBox="0 0 151 75" */}
      </div>
  )
}

export default BlurHashImage
