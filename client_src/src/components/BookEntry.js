import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BookEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: props.entry
        }
    }
    render() {
        return (
            <li className="collection-item">
            <Link to={`/people/${this.state.entry.id}`} >{this.state.entry.name}</Link>
            </li>
        )
    }
}

export default BookEntry;