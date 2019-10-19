exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(getSuperHeroName(event.givenname, event.surname)),
    };

    function getSuperHeroName(givenname, surname) {
        const superColor = [
            ['A', 'Black'],
            ['B', 'Green']
        ];
        const superPower = [
            ['A', 'Giant'],
            ['B', 'Mamba']
        ];

        // Extract first letter
        let f = givenname.substr(0, 1);
        let l = surname.substr(0, 1);

        // f = capitalize(f);
        // l = capitalize(l);
        f = 'A'
        l = 'B'

        // Use the regular Map constructor to transform a 2D key-value Array into a map
        const myColorMap = new Map(superColor);
        const myPowerMap = new Map(superPower);

        // return Super Hero Name
        return `${myColorMap.get(f)} ${myPowerMap.get(l)}`;

    };

    function capitalize(s) {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    return response;
};

