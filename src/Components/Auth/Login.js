import React, { useState } from "react";
import Input from "../../CommanComponents/Input";
import Button from "../../CommanComponents/Button";

const InitialValue = {
  email: "",
  password: "",
};

const Login = () => {
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
    <div className="login-container">
      <img
        src={`https://picsum.photos/400/200?random=${Math.floor(
          Math.random() * 1000
        )}`}
        alt="Random"
        className="random-image"
      />
      <h1>Login</h1>
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
      <Button className="button" handleSubmit={handleSubmit} name="Login" />
      <div>
        <p>Forgot Password</p>
        <p>New User? Register Here</p>
      </div>
    </div>
  );
};

export default Login;
