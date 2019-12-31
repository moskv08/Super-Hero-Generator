// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
    region: "eu-west-1",
});

// Create the DynamoDB service object
// var ddb = new AWS.DynamoDB.DocumentClient();

// var params = {
//     TableName: 'SuperHeroColorCollation',
//     Key: {
//         "letter": "F",
//     },
// };

// // Call DynamoDB to read the item from the table
// ddb.get(params, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Heroname: ", data.Item.supername);
//     }
// });

async function handler(event) {

    const color = 'Z'
    const power = 'F';

    // const color = event.queryStringParameters.color;
    // const power = event.queryStringParameters.power;

    let result = await GetHeroName(color, power);
    // return {
    //     "statusCode": 200,
    //     "headers": {
    //         "Access-Control-Allow-Origin": "*"
    //     },
    //     "body": JSON.stringify(result),
    //     "isBase64Encoded": false
    // };
    console.log(result);
};

async function GetHeroName(firstLetter, lastLetter) {

    if (/^[A-Z]/.test(firstLetter) && /^[A-Z]/.test(lastLetter)) {

        try {
            // Use the regular Map constructor to transform a 2D key-value Array into a map
            let myColor = await LoadDataFromDb(firstLetter, 'SuperHeroColorCollation');
            let myPower = await LoadDataFromDb(lastLetter, 'SuperHeroPowerCollation');
            return `${myColor} ${myPower}`;

        } catch (error) {
            return "Something went wrong: " + error.message;
        }
    }
    else {
        return "Please use single capital letters.";
    }
}

async function LoadDataFromDb(letter, tableName) {

    const ddb = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: tableName,
        Key: {
            "letter": letter,
        },
    };

    try {
        let res = await ddb.get(params).promise();
        return res.Item.supername;
    } catch (err) {
        return err.message;
    }
}

module.exports = { GetHeroName, LoadDataFromDb, handler };
