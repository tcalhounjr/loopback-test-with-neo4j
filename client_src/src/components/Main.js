import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Contacts from './Contacts';
import About from './About';
import EntryDetails from './EntryDetails';
import AddMeetup from './AddContact';


const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/about' component={About} />
        <Route exact path='/people/add' component={AddMeetup} />
        <Route exact path='/people/:id' component={EntryDetails} />
    </Switch>
  </main>
)

export default Main;