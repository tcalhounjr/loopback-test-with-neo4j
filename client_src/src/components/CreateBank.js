import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateBank extends Component {

    addUser(newContact) {
        console.log(newContact);
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/Banks',
            data: newContact
        }).then(
            response => {
                this.props.history.push('/banks');
            }
        ).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const newContact = {
            name: this.refs.name.value,
            headquarters: this.refs.headquarters.value,
            url: this.refs.url.value,
        }
        this.addUser(newContact);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/banks">Back</Link>
                <h1>Add Bank</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="name" ref="name" />
                        <label htmlFor="name">Bank Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="headquarters" ref="headquarters" />
                        <label htmlFor="headquarters">Bank Headquarters</label>
                    </div>
                    <div className="input-field">
                        <input type="url" name="url" ref="url" placeholder="http://example.com" 
                        pattern="http://.*" size="20" required />
                        <label htmlFor="url">Bank Website (http://)</label>
                    </div>
                    <input type="submit" value="Submit Bank" className="btn" />
                </form>
            </div>
        )
    }
}

export default CreateBank;