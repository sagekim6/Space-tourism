import { useLocation } from "react-router-dom";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const PlanetImg = () => {
  const location = useLocation();
  const planetName = location.pathname.split(":")[1];

  const onChangeImages = () => {
    if (planetName === "moon") {
      return moon;
    } else if (planetName === "mars") {
      return mars;
    } else if (planetName === "europa") {
      return europa;
    } else if (planetName === "titan") {
      return titan;
    }
  };

  return <img src={onChangeImages()} alt={planetName} />;
};

export default PlanetImg;
