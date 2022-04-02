import React from "react";

import styles from "./App.module.css";

import {
  HomePage,
  SignUp,
  SignIn,
  DetailPage,
  SearchPage,
  ShoppingCart,
} from "./pages";

import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";

import { useSelector } from "./redux/hooks"; 

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  };
  return <Route render={routeComponent} {...rest} />;
};

function App() {
  const jwt = useSelector((state) => state.user.token)

  return (
    // 3.html part:
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          {/* Error: [Home] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
          https://stackoverflow.com/questions/69975792/error-home-is-not-a-route-component-all-component-children-of-routes-mus
          */}
          {/* exact path */}
          <Route exact path="/" component={HomePage} />
          {/* signup */}
          <Route path="/register" component={SignUp} />
          {/* sign in route */}
          <Route path="/login" component={SignIn} />

          {/* DetailPage */}
          {/* restfule path:exact path="/detail/:paramas"   */}
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          {/* search section */}
          <Route path="/search/:keyword?" component={SearchPage} />
          <PrivateRoute
            isAuthenticated={jwt}
            path="/shoppingCart"
            component={ShoppingCart}
          />

          {/* 404 path */}
          <Route render={() => <h1>404 not fond 页面去火星了</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
