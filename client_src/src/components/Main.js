import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Banks from './Banks';
import About from './About';
import BankDetails from './BankDetails';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import CreateBank from './CreateBank';
import EditBank from './EditBank';
import UserProfile from './UserProfile';
import CreateBranch from './CreateBranch';


const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/banks' component={Banks} />
        <Route exact path='/about' component={About} />
        <Route exact path='/user/create' component={CreateUser} />
        <Route exact path='/bank/add' component={CreateBank} />
        <Route exact path='/branch/add/:id' component={CreateBranch} />
        <Route exact path='/user/profile/:id' component={UserProfile} />
        <Route exact path='/bank/:id' component={BankDetails} />
        <Route exact path='/user/edit/:id' component={EditUser} />
        <Route exact path='/bank/edit/:id' component={EditBank} />
    </Switch>
  </main>
)

export default Main;