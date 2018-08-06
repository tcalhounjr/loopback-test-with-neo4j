import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EditBank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            headquarters: '',
            url: ''
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
                    headquarters: response.data.headquarters,
                    url: response.data.url
                }, () => {
                    console.log(this.state);
                });
            })
            .catch(err => console.log(err));
    }

    updateUser(updatedBank) {
        let contactName = this.state.name;
        console.log('my name is ' + contactName);
        console.log(updatedBank);
        axios.request({
            method: 'patch',
            url: `http://localhost:3000/api/banks/${this.state.id}`,
            data: updatedBank
        }).then(
            response => {
                this.props.history.push(`/bank/${this.state.id}`);
            }
        ).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        const updatedBank = {
            headquarters: this.refs.headquarters.value,
            url: this.refs.url.value
            // email: this.refs.email.value,
            // password: this.refs.password.value
        }
        this.updateUser(updatedBank);
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
                <Link className="btn grey" to="/banks">Back</Link>
                <h1>Edit Bank</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="headquarters" ref="headquarters" value={this.state.headquarters} onChange={this.handleInputChange.bind(this)} />
                        <label htmlFor="email"> </label>
                    </div>
                    {/* <div className="input-field">
                        <input type="text" name="born" ref="born" value={this.state.born} onChange={this.handleInputChange.bind(this)} />
                    </div> */}
                    <div className="input-field">
                        <input type="url" name="url" ref="url" placeholder="http://example.com" 
                        pattern="http://.*" size="20" value={this.state.url} onChange={this.handleInputChange.bind(this)} required />
                        <label htmlFor="url"></label>
                    </div>
                    {/* <div className="input-field">
                        <input type="text" name="email" ref="email" value={this.state.email} onChange={this.handleInputChange.bind(this)} />
                        <label htmlFor="email">Email</label>
                    </div> */}
                     {/* <div className="input-field">
                        <input type="password" name="password" ref="password" />
                        <label htmlFor="password">Password</label>
                    </div> */}
                    <input type="submit" value="Edit Bank" className="btn yellow darken-3" />
                    <Link className="btn right" to={`/branch/add/${this.state.id}`}>Add Branch</Link>
                </form>
            </div>
        )
    }
}

export default EditBank;