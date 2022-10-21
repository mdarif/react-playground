import React, { useContext } from "react";
import { ThemeContext, AuthContext } from ".";

export default function Page() {
  /**
   * useContext
   *
   * useContext is a React Hook that lets you read and
   * subscribe to context from your component.
   */
  const theme = useContext(ThemeContext);
  const user = useContext(AuthContext);
  return (
    <>
      <h1>Page {theme}</h1>
      <h4>Hi {user.name}</h4>
    </>
  );
}
