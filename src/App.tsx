import React from "react";
import "./App.css";
import { HomeScene, DetailsScene } from "./scene";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="body">
        <Router>
          <Route path="/" exact component={HomeScene} />
          <Route path="/details/:type/:id" component={DetailsScene} />
        </Router>
      </div>
      <div />
    </div>
  );
};

export default App;
