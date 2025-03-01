import React from "react";
import SideBar from "./SideBar";
import UserScreen from "./UserScreen";

const Home = () => {
  // return <div>Home</div>;
  return (
    <> 
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideBar />
        <div className='user-screen-container'> 
        <UserScreen setUser="Patient" />
       
      </div>
      </div>
    </>
  );
};

export default Home;
