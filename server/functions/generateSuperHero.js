// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
    region: "eu-west-1",
});

function handler(event, context, callback) {

    const color = event.queryStringParameters.color;
    const power = event.queryStringParameters.power;

    const result = GetHeroName(color, power);

    const response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(result),
        "isBase64Encoded": false
    };

    callback(null, response);
};

function GetHeroName(firstLetter, lastLetter) {

    let responseBody = "Something went wrong.";

    if (firstLetter.length == 1 && lastLetter.length == 1) {

        if (/^[A-Z]/.test(firstLetter) && /^[A-Z]/.test(lastLetter)) {

            // Use the regular Map constructor to transform a 2D key-value Array into a map
            const myColor = LoadDataFromDb(firstLetter, 'SuperHeroColorCollation');
            const myPower = LoadDataFromDb(lastLetter, 'SuperHeroPowerCollation');

            // return Super Hero Name
            responseBody = `${myColor} ${myPower}`
        }
        else {
            responseBody = "Please use single capital letters.";
        }
    }
    return responseBody;
}

function LoadDataFromDb(letter, tableName) {
    // Create the DynamoDB service object
    const ddb = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: tableName,
        Key: {
            "letter": letter,
        },
    };

    // Call DynamoDB to read the item from the table
    ddb.get(params, function (err, data) {
        if (err) {
            return err.message;
        } else {
            return data.Item.supername;
        }
    });
}

module.exports = { GetHeroName, LoadDataFromDb, handler };
