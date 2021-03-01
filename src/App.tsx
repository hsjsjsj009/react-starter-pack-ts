import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AllRoute from "./views/routes";

function App() {
  return (
        <Router>
                <Switch>
                    {AllRoute.map<React.ReactNode>(route => {
                        return <Route exact={route.exact} path={route.path} key={Math.random()}>
                            {route.handler}
                        </Route>
                    })}
                </Switch>
        </Router>
  );
}

export default App;
