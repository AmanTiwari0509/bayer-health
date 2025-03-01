import React, { useState } from "react";
import Input from "../../CommanComponents/Input";
import Button from "../../CommanComponents/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import validator from "validator";
const InitialValue = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [inputValue, setInputValue] = useState(InitialValue);
  const [error, setError] = useState();
  const [usertype, setUsertype] = React.useState("");

  const handleUsertypeChange = (event) => {
    setUsertype(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!inputValue.name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!validator.isEmail(inputValue.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (inputValue.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!inputValue.type) {
      setError("Please select a user type.");
      return;
    }

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue), // Send name, email, password, and type
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User Created Successful:", data);
        setError("");
      } else {
        console.error("User Creation failed:", data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  console.log(inputValue, "input");
  return (
    <div className="login-container">
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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={usertype}
            label="User type"
            onChange={handleUsertypeChange}
          >
            <MenuItem value={"Patient"}>Patient</MenuItem>
            <MenuItem value={"Provider"}>Provider</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button className="button" handleSubmit={handleSubmit} name="Login" />
    </div>
  );
};

export default Signup;
