import React from "react";

const Input = ({ name, value, handleChange, placeholder, type, label }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        className="input"
      />
    </div>
  );
};

export default Input;
