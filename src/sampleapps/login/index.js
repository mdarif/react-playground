import React, { useState } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";
import { useEffect } from "react";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkUserLogin() {
    const isLoggedInStore = localStorage.getItem("isLoggedIn");
    if (isLoggedInStore === "1") {
      setIsLoggedIn(true);
    }
  }

  /**
   * In React, we should avoid performing side effects directly within
   * the component body to avoid inconsistencies. Instead, we can
   * isolate them from the rendering logic using the useEffect Hook.
   */
  useEffect(() => {
    // Check the login state after entire app is rendered
    checkUserLogin();
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default LoginApp;
