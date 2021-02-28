import React from 'react';
import './App.css';
import {LoadRepoContext, RepoContext} from "./repository/context";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllRoute from "./views/routes";

function App() {
  return (
    <RepoContext.Provider value={LoadRepoContext()}>
        <Router>
            <Switch>
                {AllRoute.map<React.ReactNode>(route => {
                    return <Route exact={route.exact} path={route.path}>
                        {route.handler}
                    </Route>
                })}
            </Switch>
        </Router>
    </RepoContext.Provider>
  );
}

export default App;
