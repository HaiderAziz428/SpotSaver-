import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No Places found. Maybe Create One</h2>
        <button>Share Place</button>
      </div>
    );
  }
  return (
    <ul className="flex flex-col items-center ">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          createrId={place.creater}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
