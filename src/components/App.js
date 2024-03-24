import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [nameSearch, setNameSearch] = useState('')
  const [onDelete, setOnDelete] = useState(0)

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data)
    )}, [])

  function newPlantSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(searchValue) {
    setNameSearch(searchValue)
  }

  function handleDelete(id) {
    setOnDelete(id)
    const deletedPlants = plants.filter((plant) => plant.id !== id)
    setPlants(deletedPlants)
  }

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(nameSearch.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage onDelete={handleDelete} handleSearch={handleSearch} nameSearch={nameSearch} setNameSearch={setNameSearch} newPlantSubmit={newPlantSubmit} plants={filteredPlants}/>
    </div>
  );
}

export default App;

// App
  // Header
  // Plant Page
    // New Plant Form
    // Search
    // Plant List
      // Plant Card