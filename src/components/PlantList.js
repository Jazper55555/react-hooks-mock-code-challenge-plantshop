import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDelete}) {

  const plantsMap = plants.map((plant) => (
    <PlantCard onDelete={onDelete} id={plant.id} key={plant.id} plant={plant}/>
  ))

  return (
    <ul className="cards">{plantsMap}</ul>
  );
}

export default PlantList;
