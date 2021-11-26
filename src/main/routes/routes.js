import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "../components/index"
const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='*'>
        </Route>
    </Switch>
    </BrowserRouter>
)

export default Routes;