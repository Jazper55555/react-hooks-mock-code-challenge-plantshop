import React, { useState } from "react";

function NewPlantForm({newPlantSubmit}) {
  const [newPlant, setNewPlant] = useState({
    'name': '',
    'image': '',
    'price': 0
  })

  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    .then(newSubmit => newPlantSubmit(newSubmit))
  }

  function handleChange(event) {
    const {name, value} = event.target

    setNewPlant((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={newPlant.name} onChange={handleChange} placeholder="Plant name" />
        <input type="text" name='image' value={newPlant.image} onChange={handleChange} placeholder="Image URL" />
        <input type="number" name='price' value={newPlant.price} onChange={handleChange} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
