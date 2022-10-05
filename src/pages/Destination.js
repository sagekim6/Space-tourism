import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

// Components
import Header from "../components/Header";
import ImageInformation from "../components/ImageInformation";
// Bg-image
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
// Planet-image
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const Destination = () => {
  const location = useLocation();
  const planetName = location.pathname.split(":")[1];
  const info = data.destinations;

  const planetInfo = () => {
    if (planetName === "moon") {
      return [info[0]];
    } else if (planetName === "mars") {
      return [info[1]];
    } else if (planetName === "europa") {
      return [info[2]];
    } else if (planetName === "titan") {
      return [info[3]];
    }
  };

  const onChangePlanetImages = () => {
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

  return (
    <DestinationBg className="bg-container">
      <Header />
      <main id="content" className="Destination">
        <h1>
          <span>01</span>
          PICK YOUR DESTINATION
        </h1>
        <ImageInformation src={onChangePlanetImages()} alt={planetName} />
        {planetInfo().map((el) => {
          return (
            <article key={el.id}>
              <div className="Destination-list">
                <Link to={"/destinations/:moon"}>MOON</Link>
                <Link to={"/destinations/:mars"}>MARS</Link>
                <Link to={"/destinations/:europa"}>EUROPA</Link>
                <Link to={"/destinations/:titan"}>TITAN</Link>
              </div>
              <h2>{el.name}</h2>
              <p>{el.description}</p>
              <div className="Destination-meta">
                <div>
                  <h3>AVG.DISTANCE</h3>
                  <p>{el.distance}</p>
                </div>
                <div>
                  <h3>EST.TRAVEL TIME</h3>
                  <p>{el.travel}</p>
                </div>
              </div>
            </article>
          );
        })}
      </main>
    </DestinationBg>
  );
};

const DestinationBg = styled.div`
  background-image: url("${Mobile}");
  @media (min-width: 35rem) {
    background-image: url("${Tablet}");
    background-position: center center;
  }
  @media (min-width: 45rem) {
    background-image: url("${Desktop}");
  }
`;

export default Destination;
