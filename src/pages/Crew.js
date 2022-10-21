import styled from "styled-components";
import { useState, memo, useCallback } from "react";
// Components
import Header from "../components/Header";
import ImageInfo from "../components/ImageInfo";
// Bg-image
import Mobile from "../assets/crew/background-crew-mobile.jpg";
import Tablet from "../assets/crew/background-crew-tablet.jpg";
import Desktop from "../assets/crew/background-crew-desktop.jpg";
// Crew-image
import Commander from "../assets/crew/image-douglas-hurley.png";
import MissionSpecialist from "../assets/crew/image-mark-shuttleworth.png";
import Pilot from "../assets/crew/image-victor-glover.png";
import FlightEngineer from "../assets/crew/image-anousheh-ansari.png";

const Crew = ({ data }) => {
  const [currentCrew, setCurrentCrew] = useState([data.crew[0]]);

  const handleCrewInfo = useCallback(
    (e) => {
      const lists = document.querySelectorAll(".Crew-list button");
      data.crew.forEach((el) => {
        if (e.target.getAttribute("data-crew") === el.role) {
          setCurrentCrew([el]);
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
    [data.crew]
  );

  const changeCrewImage = useCallback(() => {
    if (currentCrew[0].role === "Commander") {
      return Commander;
    } else if (currentCrew[0].role === "Mission Specialist") {
      return MissionSpecialist;
    } else if (currentCrew[0].role === "Pilot") {
      return Pilot;
    } else if (currentCrew[0].role === "Flight Engineer") {
      return FlightEngineer;
    }
  }, [currentCrew]);

  return (
    <CrewBg className="bg-container">
      <Header />
      <main className="Crew" id="content">
        <h1>
          <span>02</span>meet your crew
        </h1>
        <div className="Image-wrapper">
          <ImageInfo src={changeCrewImage()} alt={currentCrew[0].role} />
        </div>
        <div role={"tablist"} className="Crew-list" onClick={handleCrewInfo}>
          <button
            role="tab"
            aria-selected="true"
            data-crew="Commander"
            tabIndex="0"
          >
            <span>Commander</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            data-crew="Mission Specialist"
            tabIndex="0"
          >
            <span>Mission Specialist</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            data-crew="Pilot"
            tabIndex="0"
          >
            <span>Pilot</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            data-crew="Flight Engineer"
            tabIndex="0"
          >
            <span>Flight Engineer</span>
          </button>
        </div>
        {currentCrew.map((el) => {
          return (
            <section className="Crew-info" key={el.id}>
              <h2>{el.role}</h2>
              <h3>{el.name}</h3>
              <p>{el.bio}</p>
            </section>
          );
        })}
      </main>
    </CrewBg>
  );
};

const CrewBg = styled.div`
  background-image: url("${Mobile}");
  @media (min-width: 35rem) {
    background-position: center center;
    background-image: url("${Tablet}");
  }
  @media (min-width: 45rem) {
    background-image: url("${Desktop}");
  }
`;

export default memo(Crew);
