// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
    region: "eu-west-1",
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

var params = {
    TableName: 'SuperHeroColorCollation',
    Key: {
        'key': { S: 'F' }
    },
    ProjectionExpression: 'name'
};

// Call DynamoDB to read the item from the table
ddb.getItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Item);
    }
});
