import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import AllRoute, {RouteBuilder} from "./views/routes";

function App() {
  return (
        <Router>
                <Switch>
                    {AllRoute.map<React.ReactNode>(route => {
                        return <RouteBuilder {...route} />
                    })}
                </Switch>
        </Router>
  );
}

export default App;
