import React from "react";
import PlaceItem from "./PlaceItem";
import { Link } from "react-router-dom";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="bg-white w-96 mx-auto rounded p-10 font-sans text-lg flex flex-col  items-center m-10">
        <h2 className="">No Places found. Maybe Create One?</h2>
        <button className="my-2 px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 w-full md:w-auto">
          <Link to={`/places/new`}>Share Place</Link>
        </button>
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
