import React from "react";

import styles from "./App.module.css";

import { HomePage } from "./pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // 3.html part:
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          {/* Error: [Home] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>
          https://stackoverflow.com/questions/69975792/error-home-is-not-a-route-component-all-component-children-of-routes-mus
          */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
