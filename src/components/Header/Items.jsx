const Items = ({ icon, name, description }) => {
  return (
    <>
      <div className="allmenu__item">
        <img src={`./assets/left/${icon}.png`} alt="" />
        <div className="allmenu__side">
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Items;
