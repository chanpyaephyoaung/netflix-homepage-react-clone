import React, { useContext } from "react";
import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import SignInPage from "./components/Pages/SignInPage/SignInPage";
import { EmailInputContextProvider } from "./store/email-input-context";
import SignInContext from "./store/sign-in-context";

function App() {
  const authCtx = useContext(SignInContext);
  return (
    <EmailInputContextProvider>
      {!authCtx.isSignedIn && <HomePage />}
      {authCtx.isSignedIn && <SignInPage onSignOut={authCtx.signOutHandler} />}
    </EmailInputContextProvider>
  );
}
export default App;
