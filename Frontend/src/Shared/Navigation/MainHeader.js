import React from "react";

const MainHeader = (props) => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
      {props.children}
    </header>
  );
};

export default MainHeader;
