import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Create from "./pages/create";
import { List, Detail } from "./pages/todos";

const NormalRouter = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/home" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/create" component={Create} />
          <Route path="**" component={List} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default NormalRouter;
