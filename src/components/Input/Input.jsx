import "./styles.css";

function input({ label, type, name, placeholder }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="nput-element"
      />
    </div>
  );
}

export default Input;
