import React, { useState } from "react";
import Input from "../../CommanComponents/Input";
import Button from "../../CommanComponents/Button";
import { Link } from "react-router-dom";
import validator from "validator";

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

  const handleSubmit = async () => {
    if (!validator.isEmail(inputValue.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (inputValue.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue), // Send the email & password
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login Successful:", data);
        // Handle successful login (e.g., redirect, store token)
      } else {
        console.error("Login Failed:", data.message);
        setError(data.message); // Set error state if needed
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <Link to="/signup">
          <p>New User? Register Here</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
