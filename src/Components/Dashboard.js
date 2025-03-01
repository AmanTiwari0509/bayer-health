import React from 'react'
import SideBar from "../Components/SideBar"
import UserScreen from "../Components/UserScreen"

const Dashboard = () => {
  return (
    <div>
         <div style={{display: 'flex', flexDirection: 'row'}}>
        <SideBar />
        <div className='user-screen-container'> 
        <UserScreen setUser="Patient" />
       
      </div>
      </div>
    </div>
  )
}

export default Dashboard