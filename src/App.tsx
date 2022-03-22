import React from "react";

import styles from "./App.module.css";

import { HomePage, SignUp, SignIn, DetailPage } from "./pages";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
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
          {/* 404 path */}
          <Route render={() => <h1>404 not fond 页面去火星了</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
