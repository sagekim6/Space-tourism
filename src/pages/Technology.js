import { useState, memo, useCallback } from "react";
import styled from "styled-components";
// Component
import Header from "../components/Header";
// Bg-image
import Mobile from "../assets/technology/background-technology-mobile.jpg";
import Tablet from "../assets/technology/background-technology-tablet.jpg";
import Desktop from "../assets/technology/background-technology-desktop.jpg";
// step image
import LaunchVehicle from "../assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../assets/technology/image-space-capsule-landscape.jpg";
import SpaceCapsule from "../assets/technology/image-spaceport-landscape.jpg";
import VehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportPortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import SpaceCapsulePortrait from "../assets/technology/image-spaceport-portrait.jpg";

const Technology = ({ data }) => {
  const [currentStep, setCurrentStep] = useState([data.technology[0]]);

  const showTechInfo = useCallback(
    (e) => {
      const dataTech = e.target.getAttribute("data-tech");
      const LaunchStep = document.querySelectorAll(".Launch-step button");

      data.technology.forEach((el) => {
        if (dataTech === el.name) {
          setCurrentStep([el]);
        }
      });

      LaunchStep.forEach((el) => {
        if (el.getAttribute("aria-selected") === "true") {
          el.setAttribute("aria-selected", "false");
        }
      });
      if (e.target.getAttribute("aria-selected") === "false") {
        e.target.setAttribute("aria-selected", "true");
      }
    },
    [data.technology]
  );

  const handleTechImage = useCallback(() => {
    if (currentStep[0].name === "Launch vehicle") {
      return [LaunchVehicle, VehiclePortrait];
    } else if (currentStep[0].name === "Spaceport") {
      return [SpaceCapsule, SpaceCapsulePortrait];
    } else if (currentStep[0].name === "Space capsule") {
      return [Spaceport, SpaceportPortrait];
    }
  }, [currentStep]);

  return (
    <TechnologyBg className="bg-container">
      <Header />
      <main className="Technology" id="content">
        <h1>
          <span>03</span>
          space launch 101
        </h1>
        <picture>
          <source srcSet={handleTechImage()[1]} media="(min-width: 45em)" />
          <img src={handleTechImage()[0]} alt={currentStep[0].name} />
        </picture>
        <div className="Launch-step" role={"tablist"} onClick={showTechInfo}>
          <button
            role={"tab"}
            aria-selected="true"
            data-tech="Launch vehicle"
            tabIndex="0"
          >
            <span>Launch vehicle</span>1
          </button>
          <button
            role={"tab"}
            aria-selected="false"
            data-tech="Spaceport"
            tabIndex="0"
          >
            <span>Spaceport</span>2
          </button>
          <button
            role={"tab"}
            aria-selected="false"
            data-tech="Space capsule"
            tabIndex="0"
          >
            <span>Space capsule</span>3
          </button>
        </div>
        {currentStep.map((el) => {
          return (
            <section key={el.id}>
              <h3>the terminology...</h3>
              <h2>{el.name}</h2>
              <p>{el.description}</p>
            </section>
          );
        })}
      </main>
    </TechnologyBg>
  );
};

const TechnologyBg = styled.div`
  background-image: url("${Mobile}");
  @media (min-width: 35rem) {
    background-position: center center;
    background-image: url("${Tablet}");
  }
  @media (min-width: 45rem) {
    background-image: url("${Desktop}");
  }
`;

export default memo(Technology);
