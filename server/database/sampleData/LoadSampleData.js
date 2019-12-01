const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
    region: "eu-west-1",
});

const tableName = ['SuperHeroColorCollation', 'SuperHeroPowerCollation'];
const files = ['/superhero-colors.json', '/superhero-powers.json'];


const docClient = new AWS.DynamoDB.DocumentClient();

for (let i = 0; i < tableName.length; i++) {

    console.log(`Importing items into DynamoDB - ${tableName[i]}. Please wait.`);
    var allItems = JSON.parse(fs.readFileSync(__dirname + `${files[i]}`, 'utf8'));

    allItems.forEach(function (hero) {
        var params = {
            TableName: `${tableName[i]}`,
            Item: {
                "key": hero.key,
                "name": hero.name,
            }
        };

        docClient.put(params, function (err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded.");
            }
        });
    });
}

