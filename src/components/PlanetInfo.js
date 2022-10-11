import { memo } from "react";

const PlanetInfo = ({ current }) => {
  return (
    <>
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
    </>
  );
};

export default memo(PlanetInfo);
