import Header from "../components/Header";
import styled from "styled-components";
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
import Moon from "../assets/destination/image-moon.webp";

const Destination = () => {
  return (
    <DestinationBg className="DestinationBg bg-container">
      <Header />
      <main className="Destination">
        <div>
          <h1>
            <span>01</span>
            PICK YOUR DESTINATION
          </h1>
          <div>
            <img src={Moon} alt="moon" />
          </div>
        </div>
        <div>
          <div>
            <span>MOON</span>
            <span>MARS</span>
            <span>EUROPA</span>
            <span>TITAN</span>
          </div>
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div>
            <div>
              <span>AVG.DISTANCE</span>
              384,400 km
            </div>
            <div>
              <span>EST.TRAVEL TIME</span>3 days
            </div>
          </div>
        </div>
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
