import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from "../views"
const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={HelloWorld}/>
        <Route path='*'>
        </Route>
    </Switch>
    </BrowserRouter>
)

export default Routes;