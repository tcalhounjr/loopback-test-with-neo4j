import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Banks from './Banks';
import About from './About';
import EntryDetails from './EntryDetails';
import CreateUser from './CreateUser';
import EditContact from './EditContact';
import CreateBank from './CreateBank';


const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/banks' component={Banks} />
        <Route exact path='/about' component={About} />
        <Route exact path='/people/create' component={CreateUser} />
        <Route exact path='/bank/add' component={CreateBank} />
        <Route exact path='/people/:id' component={EntryDetails} />
        <Route exact path='/people/edit/:id' component={EditContact} />
    </Switch>
  </main>
)

export default Main;