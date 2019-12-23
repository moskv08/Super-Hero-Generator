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

exports.handler = async function (event) {
    let result = "Something went wrong.";
    const color = 'M'
    const power = 'Z'

    let myColor;
    let myPower;

    if (color.length && power.length == 1) {
        if (/^[A-Z]/.test(color) && /^[A-Z]/.test(power)) {
            LoadDataFromDb(color, 'SuperHeroColorCollation').then(result => {
                console.log(result);
            }).catch(err => {
                myColor = 'ERROR: ' + err;
            });

            LoadDataFromDb(power, 'SuperHeroPowerCollation').then(result => {
                console.log(result);
            }).catch(err => {
                myPower = 'ERROR: ' + err;
            });

            await 

        }
    } else {
        result = "Something went wrong. More than one letter detected."
    }

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*"
        },
        "body": JSON.stringify(result),
        "isBase64Encoded": false
    };
}

async function LoadDataFromDb(letter, tableName) {
    // Create the DynamoDB service object
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
        console.log(err.message);
    }
}