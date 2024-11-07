import React from 'react'
import '../Styles/Card.css'


const Card = ({ dev }) => {
 
  return (
    <div className='card'>
      <h2>¡Bienvenido {dev.name}!</h2>
      <hr />
      <p>Estos son tus datos:</p>
      <p>Nombre: {dev.name}</p>
      <p>Apellido: {dev.lastname}</p>
      <p>Edad: {dev.age}</p>
      <p>Email: {dev.email}</p>
    </div>
  );
};

export default Card;