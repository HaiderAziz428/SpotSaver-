import React, { useState } from "react";
import { Link } from "react-router-dom";
import SpotSaver from "../../Images/SpotSaver.png";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && (
        <React.Fragment>
          {/* Backdrop to capture background clicks */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={closeDrawer}
          />
          <SideDrawer isOpen={drawerIsOpen} onClick={closeDrawer}>
            <nav className="absolute left-0 z-20 bg-slate-600 w-96 h-screen">
              <NavLinks class="flex flex-col items-center justify-center h-screen gap-10" />
            </nav>
          </SideDrawer>
        </React.Fragment>
      )}

      <header className=" mx-auto bg-gray-800 flex items-center justify-between rounded-lg drop-shadow-2xl max-w-7xl">
        <button
          onClick={toggleDrawer}
          className="flex flex-col items-center justify-center ml-5 space-y-1 md:hidden"
        >
          <span className="block w-6 h-0.5 bg-gray-600" />
          <span className="block w-6 h-0.5 bg-gray-600" />
          <span className="block w-6 h-0.5 bg-gray-600" />
        </button>

        <div className="flex items-center justify-center md:justify-start mx-auto md:mx-0">
          <img className="w-28" src={SpotSaver} alt="SpotSaver" />
          <h1 className="font-bebas text-3xl text-yellow-500 ">
            <Link to="/">SpotSaver</Link>
          </h1>
        </div>
        <nav className="hidden md:flex mr-2 lg:items-center space-x-4">
          <NavLinks class="max-md:hidden flex  lg:items-center space-x-4 " />
        </nav>
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
