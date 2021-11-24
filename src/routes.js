import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={PlanetsScreen}/>
        <Route path='*'>
            <NotFoundScreen/>
        </Route>
    </Switch>
    </BrowserRouter>
)

export default Routes;