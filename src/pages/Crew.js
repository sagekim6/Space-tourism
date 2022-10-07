import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

// Components
import Header from "../components/Header";
import ImageInformation from "../components/ImageInformation";
// Bg-image
import Mobile from "../assets/crew/background-crew-mobile.jpg";
import Tablet from "../assets/crew/background-crew-tablet.jpg";
import Desktop from "../assets/crew/background-crew-desktop.jpg";
import commander from "../assets/crew/image-douglas-hurley.png";
// Crew-image
import missionSpecialist from "../assets/crew/image-mark-shuttleworth.png";
import pilot from "../assets/crew/image-victor-glover.png";
import flightEngineer from "../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const location = useLocation();
  const role = location.pathname.split(":")[1];
  const info = data.crew;

  const crewInfo = () => {
    if (role === "commander") {
      return [info[0]];
    } else if (role === "missionSpecialist") {
      return [info[1]];
    } else if (role === "pilot") {
      return [info[2]];
    } else if (role === "flightEngineer") {
      return [info[3]];
    }
  };

  const onChangeCrewImages = () => {
    if (role === "commander") {
      return commander;
    } else if (role === "missionSpecialist") {
      return missionSpecialist;
    } else if (role === "pilot") {
      return pilot;
    } else if (role === "flightEngineer") {
      return flightEngineer;
    }
  };

  return (
    <CrewBg id="content" className="bg-container">
      <Header />
      <main className="Crew">
        <h1>
          <span>02</span>meet your crew
        </h1>
        <ImageInformation src={onChangeCrewImages()} alt={role} />
        {crewInfo().map((el) => {
          return (
            <section key={el.id}>
              <div className="Crew-lists">
                <Link to={"/crews/:commander"}>
                  <span>commander</span>
                </Link>
                <Link to={"/crews/:missionSpecialist"}>
                  <span>missionSpecialist</span>
                </Link>
                <Link to={"/crews/:pilot"}>
                  <span>pilot</span>
                </Link>
                <Link to={"/crews/:flightEngineer"}>
                  <span>flightEngineer</span>
                </Link>
              </div>
              <div>
                <h2>{el.role}</h2>
                <p>{el.name}</p>
                <p>{el.bio}</p>
              </div>
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

export default Crew;
