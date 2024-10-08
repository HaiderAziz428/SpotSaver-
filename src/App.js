import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Users from "./user/Pages/Users";
import NewPlace from "./places/Pages/NewPlace";

import MainNavigation from "./Shared/Navigation/MainNavigation";
import UserPlaces from "./places/Pages/UserPlaces";
import UpdatePlace from "./places/Pages/UpdatePlace";
import Auth from "./user/Pages/Auth";
import { AuthContext } from "./Shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setLoggedIn(false);
  });
  let routes;
  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </React.Fragment>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>{routes}</Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
