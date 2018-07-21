import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render(){
        return (
            <div>
                <nav className="black darken-3">
                    <div className="nav-wrapper">
                    <a href="/" className="center brand-logo">BlackBook</a>
                    <a data-activates="main-menu" className="button-collapse show-on-large"><i class="fa fa-bars"></i></a>
                    <ul className="right hide-on-small-only">
                        <li><Link to="/contacts"><i class="fa fa-users">Contacts</i></Link></li>
                    </ul>
                    <ul className="side-nav" id="main-menu">
                        <li><Link to="/contacts"><i class="fa fa-users">Contacts</i></Link></li>
                        <li><Link to="/people/add"><i class="fa fa-plus">Add Contact</i></Link></li>
                        <li><Link to="/about"><i class="fa fa-question-circle">About</i></Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;