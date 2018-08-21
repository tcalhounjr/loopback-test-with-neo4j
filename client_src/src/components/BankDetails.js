import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class BankDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount() {
        this.getBank();
    }

    getBank() {
        let bankID = this.props.match.params.id;
        axios.get(`https://salty-plains-43075.herokuapp.com/api/Banks/${bankID}`)
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
        let bankID = this.state.details.id;
        axios.delete(`http://localhost:3000/api/banks/${bankID}`)
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
                <Link className="btn" to={`/bank/edit/${this.state.details.id}`}>Edit</Link>
                <button className="btn red right" onClick={this.onDelete.bind(this)}>Delete</button>
            </div>
        )
    }
}

export default BankDetails;