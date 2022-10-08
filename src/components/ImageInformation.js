import { memo } from "react";

const ImageInformation = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default memo(ImageInformation);
