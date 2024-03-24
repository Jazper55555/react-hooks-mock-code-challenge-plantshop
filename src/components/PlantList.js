import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantsMap = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant}/>
  ))

  return (
    <ul className="cards">{plantsMap}</ul>
  );
}

export default PlantList;
