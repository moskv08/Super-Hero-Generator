exports.handler = async (event) => {
    // TODO implement

    const superColor = [
        ['A', 'Black'],
        ['B', 'Green']
    ];
    const superPower = [
        ['A', 'Giant'],
        ['B', 'Mamba']
    ];

    // Extract first letter
    const f = event.color;
    const l = event.power;

    // Use the regular Map constructor to transform a 2D key-value Array into a map
    const myColorMap = new Map(superColor);
    const myPowerMap = new Map(superPower);

    // return Super Hero Name
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(`${myColorMap.get(f)} ${myPowerMap.get(l)}`),
    };

    return response;
};