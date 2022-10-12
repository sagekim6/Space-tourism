const CrewInfo = ({ currentCrew }) => {
  return (
    <>
      {currentCrew.map((el) => {
        return (
          <section className="Crew-info" key={el.id}>
            <h2>{el.role}</h2>
            <h3>{el.name}</h3>
            <p>{el.bio}</p>
          </section>
        );
      })}
    </>
  );
};

export default CrewInfo;
