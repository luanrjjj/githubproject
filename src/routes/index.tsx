import React from 'react';
import {Switch,Route} from 'react-router-dom';
import UserSearch from '../pages/UserSearch/index';
import UserData from '../pages/Dashboard/index'


const Routes: React.FC = () => (
    <Switch>
        <Route path = "/" exact component = {UserSearch}/>
        <Route path="/users/:user+" component = {UserData}/>
    </Switch>
)

export default Routes;