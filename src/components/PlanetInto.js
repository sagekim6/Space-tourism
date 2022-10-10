import { memo } from "react";

const PlanetInfo = () => {
  return (
    <>
      <article>
        <h2></h2>
        <p></p>
        <div className="Destination-meta">
          <div>
            <h3>AVG.DISTANCE</h3>
            <p></p>
          </div>
          <div>
            <h3>EST.TRAVEL TIME</h3>
            <p></p>
          </div>
        </div>
      </article>
    </>
  );
};

export default memo(PlanetInfo);
