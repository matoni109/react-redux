import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Header.module.css";

const Header = () => {
  // setup dispatch and get the states from REDUX
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {loginState && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}
          <li>
            {!loginState && <button onClick={loginHandler}>Login</button>}
            {loginState && <button onClick={logOutHandler}>Log Out</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
