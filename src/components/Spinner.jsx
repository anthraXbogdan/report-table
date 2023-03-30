export const Spinner = ({ text = "", size = "10em" }) => {
  const header = text ? <h3>{text}</h3> : null;
  return (
    <div className="spinner">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  );
};
