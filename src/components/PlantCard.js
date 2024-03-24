import React, { useState } from "react";

function PlantCard({plant, id, onDelete}) {
  const [inStock, setInStock] = useState(true)

  function handleStock() {
    setInStock((inStock) => !inStock)
    console.log(inStock)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    onDelete(id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> 
      {inStock === true ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <br></br>
      <button id={plant.id} className="deleteButton" onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
