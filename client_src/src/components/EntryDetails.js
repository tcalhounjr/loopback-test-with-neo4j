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
        axios.get(`http://localhost:3000/api/people/${entryID}`)
        .then(
            response => {
                this.setState({details: response.data}, () => {
                    console.log(this.state);
                })
            }
        )
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/contacts">Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
                    <li className="collection-item">Birth Year: {this.state.details.born}</li>
                </ul>
                <Link className="btn" to={`/contacts/edit/${this.state.details.id}`}>Edit</Link>
                <button className="btn red right">Delete</button>
            </div>
        )
    }
}

export default EntryDetails;