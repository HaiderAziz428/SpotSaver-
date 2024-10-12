import React from "react";
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  return (
    <li>
    <Link to={`/${props.id}/places`}>
      <div className="group w-96 p-3 mt-7 mx-auto rounded-md bg-gray-950 hover:bg-yellow-500 flex justify-start items-center gap-10 ">
        <div>
          <img
            className="w-20 h-20 rounded-full"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div>
          <h2 className="group-hover:text-gray-950 text-yellow-500 text-3xl font-bold">
            {props.name}
          </h2>
          <h3 className="text-white font-bold">
            {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
          </h3>
        </div>
      </div>
      </Link>
    </li>
  );
};

export default UserItem;
