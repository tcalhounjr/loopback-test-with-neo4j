'use strict';

const app = require('../../server/server');

module.exports = function(Branch) {
    Branch.addBankBranchRelationship = async function(bankID, zip) {
        
        let options = {};

        let relationship = '';

        const dataSource = Branch.app.datasources.db;

        const cypher = {
            query: 'MATCH (bk:Bank {id: {bankID}}), (br:Branch {bankID: {bankID}}) MERGE (bk)-[r:LOCATED_IN]->(br) RETURN type(r)',
            params: {
                bankID: bankID,
                zip: zip
            }
        }
        
        let callback = function (err, results) {
            if (err) {
                console.log(err);
            }
            let result = results[0]['type(r)'];
            console.log(result);
            console.log('print something crazy here');
            if (!result) {
                console.log('YET ANOTHER BROKEN RELATIONSHIP')
            }
            else {
                relationship = JSON.stringify(result);
                console.log(relationship);
                console.log('YOU ARE THE MFN MAN!!!!!!');
            }
        }
       const data = await dataSource.connector.execute(cypher, [], options, callback);
       console.log(data);
       return(relationship);
    };

    Branch.remoteMethod('addBankBranchRelationship', {
        http: {
            path: '/addBankBranchRelationship',
            verb: 'POST'
        },
        accepts: [{
            arg: 'bankID',
            type: 'string'
        }, {
            arg: 'zip', 
            type: 'string'
        }],
        returns: {
            arg: 'rel',
            type: 'string'
        }
    });
};
