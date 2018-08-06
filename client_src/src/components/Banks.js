import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import BankEntry from './BankEntry';

class Banks extends Component {
    constructor (){
        super();
        this.state = {
            banks: []
        }
    }

    componentWillMount(){
        this.getContacts();
    }

    getContacts() {
        axios.get('http://localhost:3000/api/Banks')
        .then(
            response => {
                this.setState({banks: response.data}, () => {
                    console.log(this.state);
                })
            }
        )
        .catch(err => console.log(err));
    }

    render(){
        const blackBankEntries = this.state.banks.map((bank, i) => {
            return(
                <BankEntry key={bank.id} entry={bank} />
            )
        })
        return (
            <div>
                <h1>Banks</h1>
                <ul className="collection">
                    {blackBankEntries}
                </ul>
                <Link className="btn right" to="/bank/add">Add Bank</Link>
            </div>
        )
    }
}

export default Banks;