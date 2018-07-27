import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditBank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            born: '',
            name: '',
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        this.getBank();
        console.log('component will mount');
    }

    getBank() {
        let entryID = this.state.id;
        console.log('if you love me wont you say somethin ' + entryID);
        axios.get(`http://localhost:3000/api/banks/${entryID}`)
        .then(
            response => {
                this.setState({
                    born: response.data.born,
                    name: response.data.name,
                    email: response.data.email,
                    password: response.data.password
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

    updateUser(updatedContact) {
        let contactName = this.state.name;
        console.log('my name is ' + contactName);
        console.log(updatedContact);
        axios.request({
            method: 'patch',
            url: `http://localhost:3000/api/banks/${this.state.id}`,
            data: updatedContact
        }).then(
            response => {
                this.props.history.push(`/banks/${this.state.id}`);
            }
        ).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedContact = {
            name: this.refs.name.value,
            born: this.refs.born.value,
            email: this.refs.email.value,
            // password: this.refs.password.value
        }
        this.updateUser(updatedContact);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/contacts">Back</Link>
                <h1>Edit Contact</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
                    </div>
                    {/* <div className="input-field">
                        <input type="text" name="born" ref="born" value={this.state.born} onChange={this.handleInputChange.bind(this)} />
                    </div> */}
                    <div className="input-field">
                        <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} />
                        <label htmlFor="email">Email</label>
                    </div>
                     {/* <div className="input-field">
                        <input type="password" name="password" ref="password" />
                        <label htmlFor="password">Password</label>
                    </div> */}
                    <input type="submit" value="Edit Bank" className="btn" />
                </form>
            </div>
        )
    }
}

export default EditBank;