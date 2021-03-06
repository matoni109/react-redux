import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import React from "react";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../src/store/auth";

function App() {
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <>
      <Header />
      {loginState && <UserProfile />}
      {!loginState && <Auth loginHandler={loginHandler} />}
      <Counter />
    </>
  );
}

export default App;
