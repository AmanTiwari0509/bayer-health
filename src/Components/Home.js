import React, { useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppProvider";

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);
  const { user, isAuthenticated, logout } = useAppContext();

  const text =
    "Health issues have a significant impact on individuals and society. Poor health can arise from various factors, including lifestyle choices, environmental conditions, genetic predisposition, and lack of medical care. Common health concerns include cardiovascular diseases, diabetes, respiratory disorders, and mental health conditions such as depression and anxiety. Unhealthy eating habits, lack of physical activity, smoking, and excessive alcohol consumption contribute to many chronic diseases. Pollution and climate change also play a role in respiratory illnesses, allergies, and other health complications. Additionally, stress and poor mental health can lead to physical ailments like high blood pressure and weakened immunity. Preventive measures are crucial in reducing health risks. Regular exercise, a balanced diet, sufficient sleep, and stress management help maintain overall well-being. Access to quality healthcare, timely medical check-ups, and vaccinations play a vital role in preventing serious illnesses. Public health awareness and government initiatives can also help in tackling widespread health concerns. A proactive approach to health can enhance the quality of life and increase longevity. By making healthier lifestyle choices and seeking early medical intervention, individuals can reduce the risk of severe health problems. A healthier society leads to greater productivity and overall economic growth.";

  const shortText = text.slice(0, 400) + "...";
  return (
    <div className="home-container">
      <h1 className="header">Healthcare</h1>
      <hr className="divider" />
      <div className="navbar">
        <div className="menu">
          <p>Home</p>
          <p>Health Topics</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <Link to="/login">
          <div>
            <h1> {isAuthenticated ? user.name : "Login"}</h1>
            {isAuthenticated && <button onClick={logout}>Logout</button>}
          </div>
        </Link>
      </div>
      <div className="latest-info-container">
        <h2>Latest Health Information</h2>
      </div>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div className="box-container">
            <h1>Covid 19 Updates</h1>
            <div className="health-container">
              <p>{showFullText ? text : shortText}</p>
              {!showFullText && (
                <button
                  className="read-more-btn"
                  onClick={() => setShowFullText(true)}
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
