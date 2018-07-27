import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EntryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount() {
        this.getContact();
    }

    getContact() {
        let entryID = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/Banks/${entryID}`)
        .then(
            response => {
                this.setState({details: response.data}, () => {
                    console.log(this.state);
                })
            }
        )
        .catch(err => console.log(err));
    }

    onDelete() {
        let contactID = this.state.details.id;
        axios.delete(`http://localhost:3000/api/people/${contactID}`)
        .then(response => {
            this.props.history.push('/banks');
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/banks">Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">Headquarters: {this.state.details.headquarters}</li>
                    <li className="collection-item">Website: {this.state.details.url}</li>
                </ul>
                <Link className="btn" to={`/people/edit/${this.state.details.id}`}>Edit</Link>
                <button className="btn red right" onClick={this.onDelete.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default EntryDetails;