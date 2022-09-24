import Header from "../components/Header";
import styled from "styled-components";
import Mobile from "../assets/home/background-home-mobile.jpg";
import Tablet from "../assets/home/background-home-tablet.jpg";
import Desktop from "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <HomeBg className="HomeBg bg-container">
      <Header />
      <main className="Home">
        <h1>This is Home</h1>
      </main>
    </HomeBg>
  );
};

const HomeBg = styled.div`
  background-image: url("${Mobile}");
  background-position: bottom center;
  @media (min-width: 35rem) {
    background-position: center center;
    background-image: url("${Tablet}");
  }
  @media (min-width: 45rem) {
    background-image: url("${Desktop}");
  }
`;

export default Home;
