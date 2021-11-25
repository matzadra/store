import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "../components/header";
const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Header}/>
        <Route path='*'>
        </Route>
    </Switch>
    </BrowserRouter>
)

export default Routes;