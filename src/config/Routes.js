import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home.js';
import TodosContainer from '../components/TodosContainer.js';


const Routes = () => {
    return (
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/todos' component={TodosContainer}/>
        </Switch>
    );
}


export default Routes;
