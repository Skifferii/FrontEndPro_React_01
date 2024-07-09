import "./styles.css";

function input({ label, type, name, placeholder, id }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="nput-element"
      />
    </div>
  );
}

// eslint-disable-next-line no-undef
export default Input;
