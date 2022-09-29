import Header from "../components/Header";
import styled from "styled-components";
import Mobile from "../assets/technology/background-technology-mobile.jpg";
import Tablet from "../assets/technology/background-technology-tablet.jpg";
import Desktop from "../assets/technology/background-technology-desktop.jpg";

const Technology = () => {
  return (
    <TechnologyBg id="content" className="TechnologyBg bg-container">
      <Header />
      <main>
        <h1>This is Technology</h1>
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

export default Technology;
