import { memo } from "react";

const ImageInfo = ({ src = "", alt = "", srcset = "" }) => {
  return <img src={src} alt={alt} srcSet={srcset} />;
};

export default memo(ImageInfo);
