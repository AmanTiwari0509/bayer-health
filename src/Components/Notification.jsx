import React, { useState } from 'react';
import './Notification.css';

const reminders = [
    {
        content: "This is the first notification",

    },
    {
        content: "Stay hydrated Aim to drink at least 8 cups of water a day",

    },
    {
        content: "This is the first notification",

    },
];

const healthTips = [
    { content: "This is the first notification"},
    { content: "Stay hydrated Aim to drink aat least 8 cups of water a day" },
]

function Notification() {
    const [show, setShow] = useState(reminders);
    const [tips, setTips] = useState(healthTips);

    return (
        <>
            <div className='notification-container'>
                <p> <b>Preventive Case Reminders</b></p>
                <ul className="notification-list">
                    {show.map((item, index) => (
                        <li key={index} className="notification">
                            <p>{item.content}</p>

                        </li>
                    ))}
                </ul>
                <hr />
                <p><b>Health Tip Of The day</b> </p>
                <ul className="notification-list2">
                    {tips.map((item, index) => (
                        <li key={index} className="notification">
                            <p>{item.content}</p>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Notification;
