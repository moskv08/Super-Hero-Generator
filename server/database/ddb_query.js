// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
    region: "eu-west-1",
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: 'SuperHeroColorCollation',
    Key: {
        "letter": "F",
    },
};

// Call DynamoDB to read the item from the table
ddb.get(params, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Item);
    }
});