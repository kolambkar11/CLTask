const Description = (props) => {
  return (
    <>
      <div className="description">
        <h1>{props.id}</h1>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Description;
