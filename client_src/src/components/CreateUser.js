import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateUser extends Component {

    addUser(newContact) {
        console.log(newContact);
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/User',
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
            // name: this.refs.name.value,
            // born: this.refs.born.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        this.addUser(newContact);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/contacts">Back</Link>
                <h1>Create Account</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    {/* <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="name" ref="born" />
                        <label htmlFor="name">Birth Year</label>
                    </div> */}
                    <div className="input-field">
                        <input type="text" name="email" ref="email" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input type="password" name="password" ref="password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Create Account" className="btn" />
                </form>
            </div>
        )
    }
}

export default CreateUser;