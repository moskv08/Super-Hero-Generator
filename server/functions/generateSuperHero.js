// MyLambdaFunction logic here
const superColor = [
    ['A', 'Black'],
    ['B', 'Green']
];
const superPower = [
    ['A', 'Giant'],
    ['B', 'Mamba']
];

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
            const myColorMap = new Map(superColor);
            const myPowerMap = new Map(superPower);

            // return Super Hero Name
            responseBody = `${myColorMap.get(firstLetter)} ${myPowerMap.get(lastLetter)}`
        }
        else {
            responseBody = "Please use single capital letters.";
        }
    }
    return responseBody;
}

module.exports = { GetHeroName, handler };