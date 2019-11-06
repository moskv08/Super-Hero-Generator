exports.handler = function (event, context, callback) {

    if (event.color.length == 1 && event.power.length == 1) {
        if (/^[A-Z]/.test(event.color) && /^[A-Z]/.test(event.power)) {
            var result = GetSuperHero(event.color, event.power);
        }
        else {
            result = "Please use single capital letters";
        }
    } else {
        result = "Something went wrong.";
    }

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
        body: {
            name: `${myColorMap.get(firstLetter)} ${myPowerMap.get(lastLetter)}`
        },
    };

    return response;
}