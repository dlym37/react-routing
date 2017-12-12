import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Route1 from './components/Route1';
import Route2 from './components/Route2';
import Route3 from './components/Route3';

export default (
<Switch>
    <Route exact path='/' component={Route1} />
    <Route path='/second' component={Route2} />
    <Route path='/third' component={Route3} />
</Switch>
)