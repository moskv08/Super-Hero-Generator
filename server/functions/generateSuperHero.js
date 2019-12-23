// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({
    region: "eu-west-1",
});

async function handler(event) {

    const color = event.queryStringParameters.color;
    const power = event.queryStringParameters.power;
    let result;

    if (color.length && power.length == 1) {
        if (/^[A-Z]/.test(color) && /^[A-Z]/.test(power)) {
            const myColorPromise = LoadDataFromDb(color, 'SuperHeroColorCollation');
            const myPowerPromise = LoadDataFromDb(power, 'SuperHeroPowerCollation');

            const myColor = await myColorPromise;
            const myPower = await myPowerPromise;

            result = `${myColor} ${myPower}`;

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
};

function GetHeroName(firstLetter, lastLetter) {

    let responseBody = "Something went wrong.";

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

    return responseBody;
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
        console.log(err.message);
    }
}

module.exports = { GetHeroName, LoadDataFromDb, handler };
