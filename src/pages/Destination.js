import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import PlanetImg from "../components/PlanetImg";
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
import data from "../data.json";

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

  return (
    <DestinationBg className="DestinationBg bg-container">
      <Header />
      <main id="content" className="Destination">
        <h1>
          <span>01</span>
          PICK YOUR DESTINATION
        </h1>
        <PlanetImg />
        <div>
          <Link to={"/destinations/:moon"}>MOON</Link>
          <Link to={"/destinations/:mars"}>MARS</Link>
          <Link to={"/destinations/:europa"}>EUROPA</Link>
          <Link to={"/destinations/:titan"}>TITAN</Link>
        </div>
        {planetInfo().map((el) => {
          return (
            <section key={el.id}>
              <h2>{el.name}</h2>
              <p>{el.description}</p>
              <div>
                <div>
                  <h3>AVG.DISTANCE</h3>
                  <p>{el.distance}</p>
                </div>
                <div>
                  <h3>EST.TRAVEL TIME</h3>
                  <p>{el.travel}</p>
                </div>
              </div>
            </section>
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
