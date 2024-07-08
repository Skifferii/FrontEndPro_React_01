import "./styles.css";

function Button({ name, type = "button" }) {
  // const nameButton = "Get";

  // return <button className="button-component">{nameButton} button</button>;
  return (
    <button className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
