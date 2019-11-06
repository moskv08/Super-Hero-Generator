exports.handler = function (event, context, callback) {
    // Extract first letter
    const firstLetter = event.color;
    const lastLetter = event.power;
    var result = GetSuperHero(firstLetter, lastLetter);

    callback(null, result);

};

function GetSuperHero(firstLetter, lastLetter) {
    // MyLambdaFunction logic here
    const superColor = [
        ['A', 'Black'],
        ['B', 'Green']
    ];
    const superPower = [
        ['A', 'Giant'],
        ['B', 'Mamba']
    ];

    // Use the regular Map constructor to transform a 2D key-value Array into a map
    const myColorMap = new Map(superColor);
    const myPowerMap = new Map(superPower);

    // return Super Hero Name
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(`${myColorMap.get(firstLetter)} ${myPowerMap.get(lastLetter)}`),
    };

    return response;
}