import Header from "../components/Header";
import styled from "styled-components";
import Mobile from "../assets/crew/background-crew-mobile.jpg";
import Tablet from "../assets/crew/background-crew-tablet.jpg";
import Desktop from "../assets/crew/background-crew-desktop.jpg";

const Crew = () => {
  return (
    <CrewBg id="content" className="CrewBg bg-container">
      <Header />
      <main>
        <h1>This is Crew</h1>
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
