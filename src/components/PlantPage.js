import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, newPlantSubmit, nameSearch, setNameSearch, handleSearch}) {
  
  return (
    <main>
      <NewPlantForm newPlantSubmit={newPlantSubmit}/>
      <Search handleSearch={handleSearch} nameSearch={nameSearch} setNameSearch={setNameSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
