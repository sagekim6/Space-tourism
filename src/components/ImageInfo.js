import { memo } from "react";

const ImageInfo = ({ src = "", alt = "" }) => {
  return <img src={src} alt={alt} />;
};

export default memo(ImageInfo);
