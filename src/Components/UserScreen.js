import React, { useState } from 'react';
import Cards from './Cards';
import './UserScreen.css';
import Notification from './Notification';



function UserScreen(props) {
    //const [user, setUser] = useState({ name: 'John Doe', age: 25 });
    return (
        <>
            <div className='user-container'>
                <h1>Welcome, {props.setUser}</h1>
               
            </div>
            <div className='user-cards'>
                <h5>Wellness Goals</h5>
                <Cards title="Steps" content="3620/6000 steps"  />
                <Cards title="Active Time" content="56/60 min"  />
                <Cards title="Sleep" content="6 hrs 30 mins" />

            </div>

            <Notification />

        </>

    );
}

export default UserScreen;