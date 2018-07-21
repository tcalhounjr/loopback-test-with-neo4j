import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddContact extends Component {

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
            name: this.refs.name.value,
            born: this.refs.born.value
        }
        this.addContact(newContact);
        console.log(this.refs.name.value);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/contacts">Back</Link>
                <h1>Add Contact</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="name" ref="born" />
                        <label htmlFor="name">Birth Year</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

export default AddContact;