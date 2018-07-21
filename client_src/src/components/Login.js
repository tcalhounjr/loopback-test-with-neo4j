import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    addContact(newContact) {
        console.log(newContact);
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/people',
            data: newContact
        }).then(
            response => {
                this.props.history.push('/');
            }
        ).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const newContact = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.addContact(newContact);
        console.log(this.refs.name.value);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/">Back</Link>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="email" ref="name" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" ref="born" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <Link className="btn blue" to="/">Create Account</Link>
                </form>
            </div>
        )
    }
}

export default Login;