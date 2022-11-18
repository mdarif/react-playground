import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Login Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
