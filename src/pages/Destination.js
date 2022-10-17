import { memo, useState, useCallback } from "react";
import styled from "styled-components";

// Components
import Header from "../components/Header";
import ImageInfo from "../components/ImageInfo";
// Bg-image
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
// Planet-image
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europa from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";

const Destination = ({ data }) => {
  const [current, setCurrent] = useState([data.destinations[0]]);

  const handleSelected = useCallback(
    (e) => {
      const lists = document.querySelectorAll(".Destination-list button");

      data.destinations.forEach((el) => {
        if (e.target.getAttribute("data-planet") === el.name) {
          setCurrent([el]);
        }
      });

      lists.forEach((el) => {
        if (el.getAttribute("aria-selected") === "true") {
          el.setAttribute("aria-selected", "false");
        }
      });
      if (e.target.getAttribute("aria-selected") === "false") {
        e.target.setAttribute("aria-selected", "true");
      }
    },
    [data.destinations]
  );

  const changePlanetImage = useCallback(() => {
    if (current[0].name === "Moon") {
      return Moon;
    } else if (current[0].name === "Mars") {
      return Mars;
    } else if (current[0].name === "Europa") {
      return Europa;
    } else if (current[0].name === "Titan") {
      return Titan;
    }
  }, [current]);

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
          <button role="tab" aria-selected="true" data-planet="Moon">
            <span>Moon</span>
            Moon
          </button>
          <button role="tab" aria-selected="false" data-planet="Mars">
            <span>Mars</span>
            Mars
          </button>
          <button role="tab" aria-selected="false" data-planet="Europa">
            <span>Europa</span>
            Europa
          </button>
          <button role="tab" aria-selected="false" data-planet="Titan">
            <span>Titan</span>
            Titan
          </button>
        </div>
        {/* <PlanetInfo current={current} /> */}
        {current.map((el) => {
          return (
            <article key={el.id}>
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

export default memo(Destination);
