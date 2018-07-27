import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import BookEntry from './BookEntry';

class Banks extends Component {
    constructor (){
        super();
        this.state = {
            contacts: []
        }
    }

    componentWillMount(){
        this.getContacts();
    }

    getContacts() {
        axios.get('http://localhost:3000/api/Banks')
        .then(
            response => {
                this.setState({contacts: response.data}, () => {
                    console.log(this.state);
                })
            }
        )
        .catch(err => console.log(err));
    }

    render(){
        const blackBookEntries = this.state.contacts.map((contact, i) => {
            return(
                <BookEntry key={contact.id} entry={contact} />
            )
        })
        return (
            <div>
                <h1>Banks</h1>
                <ul className="collection">
                    {blackBookEntries}
                </ul>
                <Link className="btn right" to="/bank/add">Add Bank</Link>
            </div>
        )
    }
}

export default Banks;