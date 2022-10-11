import { memo, useState } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import ImageInfo from "../components/ImageInfo";
// Bg-image
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
import PlanetInfo from "../components/PlanetInfo";
// Planet-image
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

import data from "../data.json";

const Destination = () => {
  const [current, setCurrent] = useState([data.destinations[0]]);

  const handleSelected = (e) => {
    const lists = document.querySelectorAll(".Destination-list div");

    lists.forEach((el) => {
      if (el.getAttribute("aria-selected") === "true") {
        el.setAttribute("aria-selected", "false");
      }
      if (e.target.getAttribute("aria-selected") === "false") {
        e.target.setAttribute("aria-selected", "true");
      }
    });

    data.destinations.map((el) => {
      if (e.target.getAttribute("data-planet") === el.name) {
        setCurrent([el]);
      }
    });
  };

  const changePlanetImage = () => {
    if (current[0].name === "Moon") {
      return Moon;
    } else if (current[0].name === "Mars") {
      return Mars;
    } else if (current[0].name === "Europa") {
      return Europa;
    } else if (current[0].name === "Titan") {
      return Titan;
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
        <ImageInfo src={changePlanetImage()} alt={current.name} />
        <div
          role={"tablist"}
          onClick={handleSelected}
          className="Destination-list"
        >
          <div aria-selected="true" data-planet="Moon">
            <span>Moon</span>
            Moon
          </div>
          <div aria-selected="false" data-planet="Mars">
            <span>Mars</span>
            Mars
          </div>
          <div aria-selected="false" data-planet="Europa">
            <span>Europa</span>
            Europa
          </div>
          <div aria-selected="false" data-planet="Titan">
            <span>Titan</span>
            Titan
          </div>
        </div>
        <PlanetInfo current={current} />
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

export default memo(Destination);
