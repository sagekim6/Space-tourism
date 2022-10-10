// import { Link, useLocation } from "react-router-dom";
import { memo, useState } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import ImageInfo from "../components/ImageInfo";
// Bg-image
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
import PlanetInto from "../components/PlanetInto";
// Planet-image
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

import data from "../data.json";

const Destination = () => {
  const [current, setCurrent] = useState("Moon");

  const handleSelected = (e) => {
    const getAtt = e.target.getAttribute("data-planet");
    const names = data.destinations.map((el) => el.name);
    const lists = document.querySelectorAll(".Destination-list button");

    lists.forEach((el) => {
      console.log(e.target.getAttribute("data-planet") === el.getAttribute);
    });
  };

  return (
    <DestinationBg className="bg-container">
      <Header />
      <main id="content" className="Destination">
        <h1>
          <span>01</span>
          PICK YOUR DESTINATION
        </h1>
        <ImageInfo />
        <div onClick={handleSelected} className="Destination-list">
          <button aria-selected="true" data-planet="Moon">
            <span>Moon</span>
            Moon
          </button>
          <button aria-selected="false" data-planet="Mars">
            <span>Mars</span>
            Mars
          </button>
          <button aria-selected="false" data-planet="Europa">
            <span>Europa</span>
            Europa
          </button>
          <button aria-selected="false" data-planet="Titian">
            <span>Titian</span>
            Titian
          </button>
        </div>
        <PlanetInto />
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
