/* {this.state.monsters.map(
    (monster, index)  => 
      <h1 key={index}> {monster.name} </h1>
    )

  } */
import React from 'react';
import './card.style.css';
 
export const Card = props => (
       
    <div className="card-container">
        <img src={`https://robohash.org/${props.id}?set2&size=180x180`} alt="Mostro"/>
        <h2 key={props.id}>{props.name}</h2>
    </div> 
);
   
