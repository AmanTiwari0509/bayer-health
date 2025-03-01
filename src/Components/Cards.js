import React from 'react';
import './Card.css';


function Cards({icon,title,content}) {
    return (
        <div className="cards" >
            <p>{icon}</p>
            <p><b>{title}</b></p>
            <p>{content}</p>
            
        </div>
    );
}

export default Cards;