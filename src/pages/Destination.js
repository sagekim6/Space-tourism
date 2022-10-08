import { Link, useLocation } from "react-router-dom";
import { memo, useCallback, useEffect } from "react";
import styled from "styled-components";
import data from "../data.json";

// Components
import Header from "../components/Header";
import ImageInformation from "../components/ImageInformation";
// Bg-image
import Mobile from "../assets/destination/background-destination-mobile.jpg";
import Tablet from "../assets/destination/background-destination-tablet.jpg";
import Desktop from "../assets/destination/background-destination-desktop.jpg";
// Planet-image
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const Destination = () => {
  const location = useLocation();
  const planetName = location.pathname.split(":")[1];
  const info = data.destinations;

  const planetInfo = useCallback(() => {
    if (planetName === "moon") {
      return [info[0]];
    } else if (planetName === "mars") {
      return [info[1]];
    } else if (planetName === "europa") {
      return [info[2]];
    } else if (planetName === "titan") {
      return [info[3]];
    }
  }, [info, planetName]);

  const onChangePlanetImages = useCallback(() => {
    if (planetName === "moon") {
      return moon;
    } else if (planetName === "mars") {
      return mars;
    } else if (planetName === "europa") {
      return europa;
    } else if (planetName === "titan") {
      return titan;
    }
  }, [planetName]);

  const lists = document.querySelectorAll(".Destination-list a");

  // const [state, setState] = useState()

  useEffect(() => {
    lists.forEach((el) => {
      if (el.getAttribute("data-planet") === planetName) {
        el.setAttribute("aria-selected", true);
      } else {
        el.setAttribute("aria-selected", false);
      }
    });
  }, [planetName, lists]);

  /**
   *
   *  목표: 링크 클릭시 aria-selected="true"로 만들기(나머지는 false로)
   *
   *  data속성값이랑 param 이랑 같으면 setAttribute 속성 써서 변경하려고 했는데
   *  data 속성은 잘 찍히는데 param이 밀려서 출력된다.(이전 값이 출력됨)
   *  < 가능성 >
   *  1. param 값이 업데이트가 안 된다.
   *  2. 리렌더가 되서 계속 초기화가 된다. -> 이거!
   *
   *  잘 동작하긴 하는데 클릭할 때 리렌더 되면서 값이 초기화되니까 클릭을 두번해야지만 적용됨
   *
   */
  // const onHandleSelcted = () => {
  //   lists.forEach((el) => {
  //     if (el.getAttribute("data-planet") === planetName) {
  //       el.setAttribute("aria-selected", true);
  //     } else {
  //       el.setAttribute("aria-selected", false);
  //     }
  //   });
  // };

  return (
    <DestinationBg className="bg-container">
      <Header />
      <main id="content" className="Destination">
        <h1>
          <span>01</span>
          PICK YOUR DESTINATION
        </h1>
        <ImageInformation src={onChangePlanetImages()} alt={planetName} />
        {planetInfo().map((el) => {
          return (
            <article key={el.id}>
              <div className="Destination-list">
                <Link data-planet="moon" to={"/destinations/:moon"}>
                  MOON
                </Link>
                <Link data-planet="mars" to={"/destinations/:mars"}>
                  MARS
                </Link>
                <Link data-planet="europa" to={"/destinations/:europa"}>
                  EUROPA
                </Link>
                <Link data-planet="titan" to={"/destinations/:titan"}>
                  TITAN
                </Link>
              </div>
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
