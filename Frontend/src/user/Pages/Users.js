import React from "react";
import UserList from "../Components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Haider Aziz",
      image: "https://avatars.githubusercontent.com/u/137106646?v=4",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};
export default Users;
