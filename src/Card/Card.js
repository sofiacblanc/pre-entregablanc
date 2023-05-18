import React from 'react'
import funk from '../assets/funk.jpg'

const Card = (props) => {
const{titulo, descripcion, imagen}= props;

  return (
    <div className="card" style={{width:'18rem'}}>
    <img src={imagen || funk} class="card-img-top"/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <button type="button" className="btn btn-dark">Agregar al carrito</button>
    </div>
  </div>
  )
}

export default Card