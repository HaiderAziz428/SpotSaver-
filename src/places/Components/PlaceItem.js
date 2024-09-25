import React from "react";
import { Link } from "react-router-dom";

const PlaceItem = (props) => {
  return (
    <li className="min-w-56 rounded max-w-md bg-white w-2/6 m-10 flex flex-col items-center">
      <div>
        <img className="rounded" src={props.image} alt={props.title} />
      </div>
      <div className="max-w-96 m-3 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <h3 className="text-lg font-bold mb-2">{props.address}</h3>
        <p className="text-md">{props.description}</p>
      </div>
      <span className="block w-full h-0.5 bg-gray-300" />
      <div className="my-3 flex flex-col space-x-0 md:flex-row md:space-x-3">
        <button className="my-2 rounded py-1 px-3 border-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500 hover:text-white w-full md:w-auto">
          VIEW ON MAP
        </button>
        <button className="my-2 px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 w-full md:w-auto">
          <Link to={`/places/${props.id}`}>EDIT</Link>
        </button>
        <button className="my-2 px-3 py-1 rounded bg-red-500 hover:bg-red-600 w-full md:w-auto">
          DELETE
        </button>
      </div>
    </li>
  );
};
export default PlaceItem;
