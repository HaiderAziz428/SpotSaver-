import React from "react";

const PlaceItem = (props) => {
  return (
    <li className="rounded bg-white w-2/6 m-10 flex flex-col items-center">
      <div>
        <img className="" src={props.image} alt={props.title} />
      </div>
      <div className=" m-3 flex flex-col items-center">
        <h2>{props.title}</h2>
        <h3>{props.address}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <button>VIEW ON MAP</button>
        <button>EDIT</button>
        <button>DELETE</button>
      </div>
    </li>
  );
};
export default PlaceItem;
