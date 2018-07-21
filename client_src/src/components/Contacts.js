import React, {Component} from 'react';
import axios from 'axios';
import BookEntry from './BookEntry';

class Contacts extends Component {
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
        axios.get('http://localhost:3000/api/people')
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
                <h1>Contacts</h1>
                <ul className="collection">
                    {blackBookEntries}
                </ul>
            </div>
        )
    }
}

export default Contacts;