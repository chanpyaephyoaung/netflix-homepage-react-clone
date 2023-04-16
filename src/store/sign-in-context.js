import React, { useState, useEffect } from "react";

const SignInContext = React.createContext({
  isSignedIn: false,
  onSignIn: () => {},
  onSignOut: () => {},
});

export const SignInContextProvider = props => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const storedUserSignInFormInfo = localStorage.getItem("isSignedIn");
    if (storedUserSignInFormInfo === "1") setIsSignedIn(true);
  }, []);

  const signInHandler = () => {
    localStorage.setItem("isSignedIn", "1");
    setIsSignedIn(true);
  };

  const signOutHandler = () => {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
  };

  return (
    <SignInContext.Provider
      value={{
        isSignedIn: isSignedIn,
        onSignIn: signInHandler,
        onSignOut: signOutHandler,
      }}
    >
      {props.children}
    </SignInContext.Provider>
  );
};

export default SignInContext;
