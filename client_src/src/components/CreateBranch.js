import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class CreateBranch extends Component {

    constructor() {
        super();
        this.state = {
           bankID: '', 
           name: '',
           branchID: '',
           zip: ''
        }
    }

    addBranch(newBranch) {
        console.log(newBranch);
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/Branches',
            data: newBranch
        }).then(
                this.setState({
                    zip: this.refs.zip.value
                }, this.getNewBranch)
        ).catch(err => console.log(err));
    }

    getNewBranch() {
        console.log('the zip code in state is......');
        console.log(this.state.zip);
        axios.get(`http://localhost:3000/api/Branches/?filter[where][and][0][bankID]=${this.state.bankID}&[filter][where][and][1][zip]=${this.state.zip}`)
        .then(
            response => {
                this.setState({branchID: response.data.id}, () => {
                    console.log('the branch id is.....')
                    console.log(this.state.branchID);
                    console.log('getting ready to connect bank to branch');
                    this.connectBankToBranch();
                })
            }
        )
        .catch(err => console.log(err));
    }

    connectBankToBranch() {
        let queryObj = {
            bankID: this.state.bankID,
            zip: this.state.zip
        };
        console.log('connecting bank to branch now');
        console.log(queryObj);
        axios.request({
            method: 'POST',
            url: 'http://localhost:3000/api/Branches/addBankBranchRelationship',
            data: queryObj
        }).then(
            response => {
                console.log('the relationship is....');
                console.log(response.data.rel);
                this.props.history.push(`/bank/${this.state.bankID}`);
            }
        ).catch(err => console.log(err));
    }

    // getBank() {
    //     let bankID = this.props.match.params.id;
    //     axios.get(`http://localhost:3000/api/Banks/${bankID}`)
    //     .then(
    //         response => {
    //             this.setState({name: response.data.name}, () => {
    //                 console.log(this.state.name);
    //             })
    //         }
    //     )
    //     .catch(err => console.log(err));
    // }

    componentWillMount() {
        this.setState({bankID: this.props.match.params.id}, () => {
            console.log('the bank id is ' + this.state.bankID);
        }); 
    }

    onSubmit(e) {
        e.preventDefault();
        const newBranch = {
            city: this.refs.city.value,
            state: this.refs.state.value,
            zip: this.refs.zip.value,
            bankID: this.props.match.params.id
        }
        this.addBranch(newBranch);
    }

    render() {
        return (
            <div>
                <br />
                <Link className="btn grey" to="/banks">Back</Link>
                <h1>New {this.state.name} Branch</h1>
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