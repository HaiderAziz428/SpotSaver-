import React from "react";


const SideDrawer = (props) => {
  return <aside onClick={props.onClick}>{props.children}</aside>;
};
export default SideDrawer;
