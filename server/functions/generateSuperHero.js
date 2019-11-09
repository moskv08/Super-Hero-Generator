

exports.handler = function (event, context, callback) {

    var result = GetSuperHero(event.color, event.power);
    callback(null, result);
};

function GetSuperHero(firstLetter, lastLetter) {

    let response = "Something went wrong.";

    // MyLambdaFunction logic here
    const superColor = [
        ['A', 'Black'],
        ['B', 'Green']
    ];
    const superPower = [
        ['A', 'Giant'],
        ['B', 'Mamba']
    ];

    if (firstLetter.length == 1 && lastLetter.length == 1) {

        if (/^[A-Z]/.test(firstLetter) && /^[A-Z]/.test(lastLetter)) {
            // Use the regular Map constructor to transform a 2D key-value Array into a map
            const myColorMap = new Map(superColor);
            const myPowerMap = new Map(superPower);

            // return Super Hero Name
            response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                body: {
                    name: `${myColorMap.get(firstLetter)} ${myPowerMap.get(lastLetter)}`
                },
            };
        }
        else {
            response = "Please use single capital letters";
        }
    }
    return response;
}