import React from "react";
import { Route, Switch } from "react-router-dom";
import Output from "./Componet/Output";
import Temp from "./Componet/Temp";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Temp />
        </Route>
        <Route exact path="/output">
          <Output />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
