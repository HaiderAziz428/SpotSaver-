import React from "react";
import UserItem from "./UserItem";
const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2 className="w-96 p-3 mt-7 mx-auto rounded-md bg-yellow-500 flex justify-start items-center gap-10 ">
          No User Found!
        </h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UserList;
