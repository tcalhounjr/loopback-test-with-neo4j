import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateBranch extends Component {

    addBranch(newBranch) {
        console.log(newBranch);
        let bankID = this.props.match.params.id;
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/Branches',
            data: newBranch
        }).then(
            response => {
                //need to route this to the bank details page
                this.props.history.push(`/bank/${bankID}`);
            }
        ).catch(err => console.log(err));
    }

    onSubmit(e) {
        e.preventDefault();
        let bankID = this.props.match.params.id;
        const newBranch = {
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.zip.value,
            bankID: {bankID}
        }
        this.addUser(newBranch);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/banks">Back</Link>
                <h1>Add Branch</h1>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <div className="input-field">
                        <input type="text" name="city" ref="city" required />
                        <label htmlFor="city">City: </label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="state" ref="state" required />
                        <label htmlFor="state">State: </label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="zip" ref="zip" required />
                        <label htmlFor="zip">Zip: </label>
                    </div>
                    <input type="submit" value="Submit Branch" className="btn" />
                </form>
            </div>
        )
    }
}

export default CreateBranch;