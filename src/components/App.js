import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [nameSearch, setNameSearch] = useState('')

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

  const filteredPlants = plants.filter((plant) => plant.name.toLowerCase().includes(nameSearch.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage handleSearch={handleSearch} nameSearch={nameSearch} setNameSearch={setNameSearch} newPlantSubmit={newPlantSubmit} plants={filteredPlants}/>
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