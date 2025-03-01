import React, { useState } from "react";
import Input from "../../CommanComponents/Input";
import Button from "../../CommanComponents/Button";

const InitialValue = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [inputValue, setInputValue] = useState(InitialValue);
  const [error, setError] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  console.log(inputValue, "input");
  return (
    <div className="signup-container">
      <h1>Create User</h1>
      <Input
        label="Name"
        name="name"
        value={inputValue.name}
        handleChange={handleChange}
        placeholder="Name"
        type="text"
      />
      <Input
        label="Email"
        name="email"
        value={inputValue.email}
        handleChange={handleChange}
        placeholder="Email"
        type="text"
      />
      <Input
        label="Password"
        name="password"
        value={inputValue.password}
        handleChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <Button
        className="button"
        handleSubmit={handleSubmit}
        name="Create User"
      />
    </div>
  );
};

export default Signup;
